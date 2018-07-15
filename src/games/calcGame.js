import { cons } from 'hexlet-pairs';
import start from '..';
import { getRandomNumber } from '../utilFunc';

const gameDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  let rand = 1 + (Math.random() * 3);
  rand = Math.floor(rand);
  switch (rand) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '/';
  }
};

const getResultCals = (firstOperand, secondOperand, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstOperand + secondOperand;
      break;
    case '-':
      answer = firstOperand - secondOperand;
      break;
    case '*':
      answer = firstOperand * secondOperand;
      break;
    default:
      answer = (firstOperand / secondOperand).toFixed(2);
      break;
  }
  return answer;
};

const gameInit = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = getRandomOperator();
  const answer = getResultCals(firstOperand, secondOperand, operator);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return cons(question, answer);
};

export default () => start(gameDescription, gameInit);
