import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i < num; i++) { if (num % i === 0) return false; }
  return num !== 1 && num !== 0;
};

const gameInit = () => {
  const number = getRandomNumber();
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => start(gameDescription, gameInit);
