#!/usr/bin/env node
import actual from '..';
import { game } from '../even-logic';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const name = actual('May I have your name?');
console.log(` Hallo, ${name}!`);


game(name);
