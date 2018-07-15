import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getRightAnswer = rightAnswer => (rightAnswer === true ? 'yes' : 'no');

const gameInit = () => {
  const number = getRandomNumber();
  const answer = getRightAnswer(isEven(number));
  const question = `${number}`;
  return cons(question, answer);
};

export default () => start(gameDescription, gameInit);
