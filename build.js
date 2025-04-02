const { execSync } = require('child_process');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });

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