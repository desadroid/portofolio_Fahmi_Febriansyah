import fs from 'fs';
import path from 'path';

console.log('--- Running Post-Build Automation ---');

// 1. Copy api/ directory to dist/api/
const apiSrc = path.resolve('api');
const apiDest = path.resolve('dist', 'api');

if (fs.existsSync(apiSrc)) {
  fs.cpSync(apiSrc, apiDest, {
    recursive: true,
    filter: (src) => {
      const base = path.basename(src);
      // Skip local .env, storage json files, and git/cache files
      if (base === '.env' || base.startsWith('.env.') || base === '.git') return false;
      if (src.includes('storage') && base.endsWith('.json')) return false;
      return true;
    }
  });
  console.log('✓ Successfully copied api/ -> dist/api/ (secrets excluded)');
}

// 2. Copy .htaccess to dist/.htaccess
const htaccessSrc = path.resolve('.htaccess');
const htaccessDest = path.resolve('dist', '.htaccess');

if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log('✓ Successfully copied .htaccess -> dist/.htaccess');
}

// 3. Include the React Bits component license in the deployment bundle
const lanyardLicenseSrc = path.resolve('LICENSES', 'React-Bits-Lanyard.txt');
const lanyardLicenseDest = path.resolve('dist', 'LICENSES', 'React-Bits-Lanyard.txt');

if (fs.existsSync(lanyardLicenseSrc)) {
  fs.mkdirSync(path.dirname(lanyardLicenseDest), { recursive: true });
  fs.copyFileSync(lanyardLicenseSrc, lanyardLicenseDest);
  console.log('✓ Included React Bits Lanyard license in dist/LICENSES/');
}

// 4. Sync dist/assets to root assets/
const distAssets = path.resolve('dist', 'assets');
const rootAssets = path.resolve('assets');

if (fs.existsSync(distAssets)) {
  if (!fs.existsSync(rootAssets)) {
    fs.mkdirSync(rootAssets, { recursive: true });
  }
  fs.cpSync(distAssets, rootAssets, { recursive: true });
  console.log('✓ Successfully synced dist/assets/ -> root assets/');
}

console.log('--- Post-Build Complete! Ready for Deployment ---');
