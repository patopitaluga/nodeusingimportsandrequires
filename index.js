// To make require available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const a = require('./exportrequire.cjs');

import b from './exportimport.mjs'

a();
b();

console.log('');
console.log('Dynamic import using import as function:');

// dynamic import
const pathToModule = './exportimport.mjs';
const obj = await import(pathToModule);
obj.default();
