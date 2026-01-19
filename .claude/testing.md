# Testing Infrastructure for Local Development

## Environment Validation

This document outlines the testing infrastructure for the Forged Apps website running on `localhost:3000`.

## Prerequisites

The local development server must be running:
```bash
npm run dev
```

This starts the Next.js development server on `http://localhost:3000`.

## Testing Guidelines

### Before Creating New Functionality

1. **Validate Environment**: Always verify the dev server is accessible
2. **Check Current State**: Test existing pages and routes
3. **Document Baseline**: Note current behavior before changes
4. **Test Incrementally**: After each change, verify it works locally

### Environment Validation Checks

Run these checks before starting work:

1. **Server Accessibility**
   ```bash
   curl -f http://localhost:3000
   ```

2. **Key Routes**
   - Homepage: `http://localhost:3000`
   - Tech Radar: `http://localhost:3000/tech-radar`
   - Docs: `http://localhost:3000/tech-radar/docs`
   - MCPflare: `http://localhost:3000/mcpflare`

3. **Build Validation**
   ```bash
   npm run build
   ```

### Test Cases for New Features

When creating new functionality:

1. **Route Testing**: Verify new routes are accessible
2. **Content Validation**: Check content renders correctly
3. **Navigation**: Test links and navigation work
4. **Responsive Design**: Verify mobile/desktop views
5. **Build Check**: Ensure production build succeeds

## Common Test Commands

```bash
# Check if dev server is running
curl -I http://localhost:3000

# Get homepage HTML
curl http://localhost:3000

# Check specific route
curl http://localhost:3000/tech-radar

# Validate build
npm run build

# Check for TypeScript errors
npx tsc --noEmit
```

## Automated Validation

See `validate-env.js` for automated environment validation script.

## Integration with Claude Code

Claude Code will:
1. Run validation checks before implementing features
2. Test changes incrementally during development
3. Verify builds succeed after changes
4. Document any issues found during testing
