console.clear()

const readlineSync = require('readline-sync');
const chalk = require('chalk')

console.log(chalk.bold.red.bgWhite('\t\t  -------- The Bhagavad Gita Quiz !! --------  '));

console.log(chalk.bold.blue.bgWhite(`\n\n\t\t  -------- ${chalk.underline('The Quiz begins..., All the Best !!')} --------  \n`));
var score = 0;

console.log("")

var userName = readlineSync.question("What's your name? ")
// console.log("Welcome" + userName + " to 'The Bhagavad Gita Quiz'")
console.log(chalk.cyan(`\n\tWelcome `+ userName + " to the Quiz let's test your Bhagavad Gita knowledge..."));

const bGitaQuestionBank = [
  {
    question: 'Who is the speaker of Bhagavad Gita ?',
    choice: ['Lord Shankar', 'Vishnu', 'Ganesh', 'Lord Shri Krishna'],
    answer: 3,
  },
  {
    question: 'What is the literary meaning of Bhagavad Gita ?',
    choice: ['Book', 'Puran', 'Song of the Lord', 'Scripture'],
    answer: 2,
  },
  {
    question: 'Who had the knowledge of Gita before Arjuna ?',
    choice: ['Lord Ganesh', 'Lord Sun', 'Ravan', 'Lord Bramha'],
    answer: 1,
  },
  {
    question: 'Gita has how many chapters?',
    choice: ['19', '20', '18', '25'],
    answer: 2,
  },
  {
    question: 'Lord Krishna gave this sermon where ?',
    choice: ['Vrindavan', 'Battlefield of Kurukshetra', 'Mathura', 'Singapore'],
    answer: 1,
  },
  {
    question: 'How many verses does Gita have?',
    choice: ['500', '1000', '700', '1800'],
    answer: 2,
  },
  {
    question: 'Wherever Krishna is present, the ________ is also present.',
    choice: ['Transcendental conchshell', ' Goddess of fortune', 'Appearance', 'Activity'],
    answer: 1,
  },
  {
    question: 'The chariot on which Arjuna and Krishna were seated was donated by ____________',
    choice: ['The fire-god', 'The sun-god', 'Indra', 'Lord Shiva'],
    answer: 0,
  },
  {
    question: 'What are the names of Krishna and Arjuna’s conchshell?',
    choice: [' Ananta-vijaya and Dhananjaya', 'Sughosa and Manipushpaka', 'Pancajanya and Devadatta', 'None of these'],
    answer: 2,
  },
  {
    question: 'What was Arjuna’s flag marked with?',
    choice: ['Goddess of fortune', 'Sword', 'Hanuman', 'Fire-God'],
    answer: 2,
  }
];

for (let val = 0; val < bGitaQuestionBank.length; val++) {
  console.log(`\nQ${val + 1}`);
  play(bGitaQuestionBank[val]);
  console.log(chalk.red.bold(`\nCurrent Score: ${score}`));
}

function play({ question, choice, answer }) {

  const index = readlineSync.keyInSelect(choice, question);

  if (index === answer) {
    score++;
  }
}

if (score >= 7) {
  console.log(chalk.white.bgYellow.bold(`\n\t  Congrats !! you have passed the ${chalk.italic('Bhagavad Gita Quiz!!!')}  \n`));

  console.log(chalk.magentaBright('\n\tQuiz ended\n'));
}
else {
  console.log(chalk.white.bgRed.bold('\n\tBetter Luck Next Time\n'));
}