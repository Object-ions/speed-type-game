//Get DOM elements
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const wordsArr = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

//Init randomWord
let randomWord;

//Init score
let score = 0;

//Init time
let time = 10;

//Generate random word from array
function getRandomWord() {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)];
}

//Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerText = randomWord
}

//Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score
}

addWordToDOM();

//Event listeners
text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    //Clear
    e.target.value = '';
  }
} )