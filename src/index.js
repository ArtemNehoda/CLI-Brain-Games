import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameCount = 3;
const greeting = (gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  console.log(gameDescription);
  const userName = readlineSync.question('What\'s your name?: ');
  console.log(`Hallo, ${userName}`);
  return userName;
};

const printGameOver = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};

export default (gameDescription, getAnswer) => {
  let rightAnswerUser = 0;
  const userName = greeting(gameDescription);
  for (let i = 0; i < gameCount; i++) {
    const dataGame = getAnswer();
    const rightAnswer = cdr(dataGame);
    const question = car(dataGame);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(rightAnswer)) {
      console.log('Correct!');
      rightAnswerUser++;
    } else {
      printGameOver(rightAnswer, userAnswer, userName);
      return;
    }
  }
  if (rightAnswerUser === gameCount) console.log(`Congratulations, ${userName}`);
};
