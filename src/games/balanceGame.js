import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'Balance the given number.';

const getBalanceNumber = (arr) => {
  const localArr = arr.slice(); // copy array in local constant
  const bigNum = Math.max(...localArr);
  const lowNum = Math.min(...localArr);
  const sortedArr = localArr.sort().slice(1, localArr.length - 1);
  if ((bigNum - lowNum) <= 1) {
    return localArr.sort();
  }
  return getBalanceNumber([bigNum - 1, lowNum + 1, ...sortedArr]);
};

const gameInit = () => {
  const question = String(getRandomNumber(1000));
  const answer = getBalanceNumber(question.split('')).join('');
  return cons(question, answer);
};

export default () => start(gameDescription, gameInit);
