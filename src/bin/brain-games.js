#!/usr/bin/env node
import actual from '..';

console.log('Welcome to the Brain Games!');
const name = actual('May I have your name?');
console.log(` Hallo, ${name}!`);
