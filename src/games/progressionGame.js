import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'What number is missing in this progression?';

const getProgressionArray = (distance) => {
  const numArray = [];
  let lastPushedNum = getRandomNumber(50);
  for (let i = 0; i < 10; i++) {
    numArray[i] = lastPushedNum;
    lastPushedNum += distance;
  }
  return numArray;
};
const getResults = (array) => {
  const localArray = array.slice();
  const questionIndex = getRandomNumber(localArray.length - 1);
  const answer = localArray[questionIndex];
  localArray[questionIndex] = '..';
  const question = localArray.join(' ');
  return cons(question, answer);
};
const gameInit = () => {
  const numDistance = getRandomNumber(6);
  return getResults(getProgressionArray(numDistance));
};

export default () => start(gameDescription, gameInit);
