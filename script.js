//Get DOM elements
const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
let difficultySelect = document.getElementById('difficulty');

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

//Set difficulty to value in local storage or  'medium'
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

//Set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

//Focus on text on start
text.focus();

//Start counting down
const timeInterval = setInterval(updateTime, 1000);

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

//Update time
function updateTime() {
  time--;
  timeEl.innerText = time + 's';

  if (time === 0) {
    clearInterval(timeInterval);
    //End game
    gameOver();
  }
}

//Game over show end screen
function gameOver() {
  endGameEl.innerHTML = `
  <h1> Time ran out </h1>
  <p> Your final score is: ${score}</p>
  <button onclick="window.location.reload()"> Reload </button>
  `;

  endGameEl.style.display = 'flex';
}

addWordToDOM();

function textInputEvent(e) {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    //Clear
    e.target.value = '';

    //Add time for when user hit the word
    if (difficulty === 'hard') {
      time += 2;
    } else if (difficulty === 'medium'){
      time += 3;
    } else {
      time += 5;
    }

    updateTime();
  }
}

//Event listeners

//Typing
text.addEventListener('input', textInputEvent);

//Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

//Setting select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});
