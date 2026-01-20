#!/bin/bash
set -euo pipefail

# Test Utilities for Local Development Environment
# This script provides utility functions for testing localhost:3000
# REQUIREMENTS: Git Bash, WSL, or Unix-like environment on Windows

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
LOCALHOST="http://localhost:3000"
TIMEOUT=5

# Print colored message
print_message() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Check if server is running
check_server() {
    print_message "$BLUE" "🔍 Checking if dev server is running..."

    if curl -s -f -m $TIMEOUT "$LOCALHOST" > /dev/null 2>&1; then
        print_message "$GREEN" "✓ Dev server is running at $LOCALHOST"
        return 0
    else
        print_message "$RED" "✗ Dev server is not accessible at $LOCALHOST"
        print_message "$YELLOW" "💡 Start it with: npm run dev"
        return 1
    fi
}

# Check specific route
check_route() {
    local route=$1
    local url="${LOCALHOST}${route}"

    if curl -s -f -m $TIMEOUT "$url" > /dev/null 2>&1; then
        print_message "$GREEN" "✓ Route accessible: $route"
        return 0
    else
        print_message "$RED" "✗ Route not accessible: $route"
        return 1
    fi
}

# Check all main routes
check_all_routes() {
    print_message "$BLUE" "\n🔍 Checking all main routes...\n"

    local routes=(
        "/"
        "/tech-radar"
        "/tech-radar/docs"
        "/mcpflare"
        "/legal/privacy"
        "/legal/terms"
        "/legal/security"
    )

    local failed=0

    for route in "${routes[@]}"; do
        if ! check_route "$route"; then
            ((failed++))
        fi
    done

    echo ""
    if [ $failed -eq 0 ]; then
        print_message "$GREEN" "✓ All routes accessible!"
        return 0
    else
        print_message "$RED" "✗ $failed route(s) failed"
        return 1
    fi
}

# Get page title
get_page_title() {
    local route=$1
    local url="${LOCALHOST}${route}"

    local title=$(curl -s -m $TIMEOUT "$url" | grep -o '<title>[^<]*</title>' | sed 's/<title>\(.*\)<\/title>/\1/')

    if [ -n "$title" ]; then
        echo "$title"
    else
        echo "No title found"
    fi
}

# Validate build
validate_build() {
    print_message "$BLUE" "🔨 Validating production build...\n"

    if npm run build > /dev/null 2>&1; then
        print_message "$GREEN" "✓ Build succeeded"
        return 0
    else
        print_message "$RED" "✗ Build failed"
        print_message "$YELLOW" "💡 Run 'npm run build' to see errors"
        return 1
    fi
}

# Quick health check
quick_check() {
    print_message "$BLUE" "\n🏥 Quick Health Check\n"

    check_server
    local server_status=$?

    if [ $server_status -eq 0 ]; then
        check_route "/"
        check_route "/tech-radar"
        check_route "/mcpflare"
    fi

    echo ""
    if [ $server_status -eq 0 ]; then
        print_message "$GREEN" "✓ Environment is healthy"
        return 0
    else
        print_message "$RED" "✗ Environment check failed"
        return 1
    fi
}

# Full validation
full_validation() {
    print_message "$BLUE" "\n🔍 Running Full Environment Validation\n"

    check_server || return 1
    echo ""
    check_all_routes || return 1
}

# Export functions for use in other scripts
export -f check_server
export -f check_route
export -f check_all_routes
export -f get_page_title
export -f validate_build
export -f quick_check
export -f full_validation

# If script is run directly, do quick check
if [ "${BASH_SOURCE[0]}" -ef "$0" ]; then
    quick_check
fi
