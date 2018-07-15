import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  return findGcd(numTwo, numOne % numTwo);
};

const gameInit = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const answer = findGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return cons(question, answer);
};

export default () => start(gameDescription, gameInit);
