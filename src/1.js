const getRandomNumber = () => Math.floor(Math.random() * 10);

const generateQuestions = (numQuestions) => {
  const questions = [];
  for (let i = 0; i < numQuestions; i++) {
    const operation = ['+', '-', 'x', '/'][getRandomNumber(3)];
    const operand1 = getRandomNumber();
    const operand2 = getRandomNumber();
    questions.push({operation, operand1, operand2});
  }
  return questions;
}
