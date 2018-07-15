import { cons } from 'hexlet-pairs';
import start from '..';
import { getRandomNumber, isEven, getRightAnswer } from '../utilFunc';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const gameInit = () => {
  const number = getRandomNumber();
  const answer = getRightAnswer(isEven(number));
  const question = `${number}`;
  return cons(question, answer);
};

export default () => start(gameDescription, gameInit);
