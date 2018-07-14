export const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

export const findGcd = (numOne, numTwo) => {
  if (numTwo === 0) {
    return numOne;
  }
  return findGcd(numTwo, numOne % numTwo);
};

export const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const isEven = num => num % 2 === 0;


export const getRightAnswer = rightAnswer => (rightAnswer === true ? 'yes' : 'no');
