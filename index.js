// To make require available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const a = require('./exportrequire.cjs');

import b from './exportimport.mjs'

a();
b();
