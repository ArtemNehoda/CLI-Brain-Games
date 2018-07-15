import { cons } from 'hexlet-pairs';
import start from '..';
import getRandomNumber from '../utilFunc';

const gameDescription = 'What is the result of the expression?';

const getResultCals = (firstOperand, secondOperand) => {
  let answer = 0;
  const caseNum = Math.floor(1 + (Math.random() * 3));
  let operator = '';
  switch (caseNum) {
    case 1:
      operator = '+';
      answer = firstOperand + secondOperand;
      break;
    case 2:
      operator = '-';
      answer = firstOperand - secondOperand;
      break;
    case 3:
      operator = '*';
      answer = firstOperand * secondOperand;
      break;
    default:
      operator = '/';
      answer = (firstOperand / secondOperand).toFixed(2);
      break;
  }
  return cons(`${firstOperand} ${operator} ${secondOperand}`, answer);
};

const gameInit = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  return getResultCals(firstOperand, secondOperand);
};

export default () => start(gameDescription, gameInit);
