import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'Is this number prime?';

const isPrime = (num, divisor = num - 1) => {
  if ((num !== 2 && num % 2 === 0) || num <= 0) return false;
  if (num === 1 || divisor === 1) return true;
  if (num % divisor !== 0) {
    return isPrime(num, divisor - 1);
  }
  return null;
};

const gameInit = () => {
  const number = getRandomNumber();
  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => start(gameDescription, gameInit);
