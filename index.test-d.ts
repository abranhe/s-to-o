import { expectType } from 'tsd';
import sTo = require('.');

expectType<object>(sTo('a: a, b: b, c: 3, d: 7'));