import { cons } from 'hexlet-pairs';
import { start } from '..';
import { getRandomNumber, findGcd } from '../util/utilFunc';


const gameInit = () => {
  const oneNumber = getRandomNumber();
  const twoNumber = getRandomNumber();
  const answer = findGcd(oneNumber, twoNumber);
  const question = `${oneNumber} ${twoNumber}`;
  return cons(question, answer);
};


export default () => {
  const gameManual = 'Find the greatest common divisor of given numbers.';
  start(gameManual, gameInit);
};
