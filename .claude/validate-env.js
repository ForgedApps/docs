#!/usr/bin/env node

/**
 * Environment Validation Script
 *
 * This script validates that the local development environment is properly
 * configured and accessible at localhost:3000
 */

const http = require('http');

const LOCALHOST_URL = 'http://localhost:3000';
const TIMEOUT = 5000;

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkUrl(url, description) {
  return new Promise((resolve) => {
    const req = http.get(url, { timeout: TIMEOUT }, (res) => {
      const success = res.statusCode >= 200 && res.statusCode < 400;

      if (success) {
        log(`✓ ${description}: ${res.statusCode}`, 'green');
      } else {
        log(`✗ ${description}: ${res.statusCode}`, 'red');
      }

      resolve({ url, success, statusCode: res.statusCode });
    });

    req.on('error', (err) => {
      log(`✗ ${description}: ${err.message}`, 'red');
      resolve({ url, success: false, error: err.message });
    });

    req.on('timeout', () => {
      req.destroy();
      log(`✗ ${description}: Timeout`, 'yellow');
      resolve({ url, success: false, error: 'Timeout' });
    });
  });
}

async function validateEnvironment() {
  log('\n🔍 Validating Local Development Environment\n', 'blue');

  const checks = [
    { url: `${LOCALHOST_URL}`, description: 'Homepage' },
    { url: `${LOCALHOST_URL}/tech-radar`, description: 'Tech Radar Page' },
    { url: `${LOCALHOST_URL}/tech-radar/docs`, description: 'Docs Page' },
    { url: `${LOCALHOST_URL}/mcpflare`, description: 'MCPflare Page' },
  ];

  const results = [];

  for (const check of checks) {
    const result = await checkUrl(check.url, check.description);
    results.push(result);
  }

  const allPassed = results.every(r => r.success);

  log('', 'reset');
  if (allPassed) {
    log('✓ All environment checks passed!', 'green');
    log('The development environment is ready.', 'green');
    process.exit(0);
  } else {
    log('✗ Some checks failed!', 'red');
    log('Make sure the dev server is running: npm run dev', 'yellow');
    process.exit(1);
  }
}

// Run validation
if (require.main === module) {
  validateEnvironment().catch((err) => {
    log(`\n✗ Validation failed: ${err.message}`, 'red');
    process.exit(1);
  });
}

module.exports = { validateEnvironment, checkUrl };
