import { cons } from 'hexlet-pairs';
import { start } from '..';
import { getRandomNumber, isEven, getRightAnswer } from '../util/utilFunc';


const gameInit = () => {
  const oneNumber = getRandomNumber();
  const answer = getRightAnswer(isEven(oneNumber));
  const question = `${oneNumber}`;
  return cons(question, answer);
};

export default () => {
  const gameManual = 'Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".';
  start(gameManual, gameInit);
};
