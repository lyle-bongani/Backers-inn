const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Clean install dependencies
  console.log('Cleaning and installing dependencies...');
  if (fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }
  if (fs.existsSync(path.join(process.cwd(), '.next'))) {
    execSync('rm -rf .next', { stdio: 'inherit' });
  }
  execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });

  // Run build with ESLint disabled
  console.log('Building the application with ESLint disabled...');
  execSync('DISABLE_ESLINT_PLUGIN=true NEXT_DISABLE_ESLINT=1 npx next build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      DISABLE_ESLINT_PLUGIN: 'true',
      NEXT_DISABLE_ESLINT: '1'
    }
  });

  console.log('Build completed successfully!');
  process.exit(0);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 