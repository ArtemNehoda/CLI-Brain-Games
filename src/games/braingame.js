import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const userName = readlineSync.question('What\'s your name?: ');
  console.log(`Hallo , ${userName}`);
};
