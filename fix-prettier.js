// fix-prettier.js
// Script to automatically fix all prettier formatting issues

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Files with errors according to the build log
const problematicFiles = [
  'src/App.tsx',
  'src/components/Layout/Layout.tsx',
  'src/components/Layout/index.tsx',
  'src/components/Navigation/Navigation.tsx',
  'src/components/Navigation/index.tsx',
  'src/pages/DevSetup.tsx',
  'src/pages/Home.tsx',
  'src/pages/Resources.tsx',
  'src/pages/Skills.tsx',
  'src/pages/Work.tsx'
];

// Check if .prettierrc exists, if not, create a basic one
const ensurePrettierConfig = () => {
  const configPath = path.join(process.cwd(), '.prettierrc');
  
  if (!fs.existsSync(configPath)) {
    console.log('Creating default .prettierrc file...');
    const defaultConfig = {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "printWidth": 100,
      "endOfLine": "auto"
    };
    
    fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
    console.log('Created .prettierrc with default settings');
  } else {
    console.log('.prettierrc already exists, using existing configuration');
  }
};

// Fix formatting issues
const fixFormattingIssues = () => {
  // First ensure we have a prettier config
  ensurePrettierConfig();
  
  // Check if prettier is installed
  exec('npx prettier --version', (error) => {
    if (error) {
      console.log('Prettier not found. Installing prettier...');
      exec('npm install --save-dev prettier', (installError) => {
        if (installError) {
          console.error('Failed to install prettier:', installError);
          return;
        }
        runPrettier();
      });
    } else {
      console.log('Prettier is already installed.');
      runPrettier();
    }
  });
};

// Run prettier on all problematic files
const runPrettier = () => {
  console.log('Running prettier on files with formatting issues...');
  
  // Format all the problematic files
  const formatCommand = `npx prettier --write ${problematicFiles.join(' ')}`;
  
  exec(formatCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('Error running prettier:', error);
      console.error(stderr);
      return;
    }
    
    console.log('Prettier formatting completed successfully!');
    console.log('Files fixed:');
    problematicFiles.forEach(file => console.log(`- ${file}`));
    
    console.log('\nYou can now try running the build again with:');
    console.log('npm run build');
    
    // Option to format all files
    console.log('\nTo format ALL files in your project, run:');
    console.log('npx prettier --write "src/**/*.{js,jsx,ts,tsx,css,scss,json}"');
  });
};

// Start the process
fixFormattingIssues();