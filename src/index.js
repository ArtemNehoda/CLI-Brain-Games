import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const gameCount = 3;
const printHallo = userName => (console.log(`Hallo, ${userName}`));
const printWelcome = () => console.log('Welcome to the Brain Games!');
const printDescription = gameDescription => console.log(gameDescription);
const askName = () => {
  const userName = readlineSync.question('What\'s your name?: ');
  return userName;
};

const printGameOver = (result, Answer, userName) => {
  console.log(`"${Answer}" is wrong answer ;(. Correct answer was "${result}"`);
  console.log(`Let's try again, ${userName}`);
};

export default (gameDescription, getAnswer) => {
  printWelcome();
  console.log('');
  printDescription(gameDescription);
  const userName = askName();
  printHallo(userName);
  for (let i = 0; i < gameCount; i++) {
    const dataGame = getAnswer();
    const rightAnswer = cdr(dataGame);
    const question = car(dataGame);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      printGameOver(rightAnswer, userAnswer, userName);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
