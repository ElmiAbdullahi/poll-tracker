// import functions and grab DOM elements
const currentPollEl = document.getElementById('current-poll-container');
const newPollEl = document.getElementById('new-poll');
const optionAAddButton = document.getElementById('option-a-add-button');
const optionASubtractButton = document.getElementById('option-a-sub-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionBSubtractButton = document.getElementById('option-b-sub-button');
const finishPollButton = document.getElementById('finish-poll-button');
const pastPollsContainer = document.getElementById('past-poll-container');
// let state
let question = '';
let optionA = '';
let optionB = '';
let votesA = 0;
let votesB = 0;

let pastPolls = [];
// set event listeners 
newPollEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(currentPollEl);
  const userQuestion = data.get('question');
  const userOptionA = data.get('questionA');
  const userOptionB = data.get('questionB');
  question = userQuestion;
  optionA = userOptionA;
  optionB = userOptionB;

  renderPoll();

  displayCurrentPoll();

});

optionAAddButton.addEventListener('click', () => {
votesA++;
displayCurrentPoll();
});
optionBAddButton.addEventListener('click', () => {
  votesB++;
  displayCurrentPoll();
});

optionASubtractButton.addEventListener('click', () => {
  votesA--;
  displayCurrentPoll();
});

optionBSubtractButton.addEventListener('click', () => {
  votesB--;
  displayCurrentPoll();
});

function renderPoll(question, optionA, optionB, votesA, votesB) {
  const currentPollEl = document.createElement('div');
  const questionEl = document.createElement('p');
  const userOptionA = document.createElement('p');
  const userOptionB = document.createElement('p');
  const votesAEl = document.createElement('p');
  const votesBEl = document.createElement('p');
  questionEl.textContent = question;
  userOptionA.textContent = optionA;
  userOptionB.textContent = optionB;
  votesAEl.textContent = votesA;
  votesBEl.textContent = votesB;

  currentPollEl.append(questionEl, userOptionA, userOptionB, votesA, votesB);
  return currentPollEl;





}

function displayCurrentPoll() {
  newPollEl.reset();
  currentPollEl.textContent = '';
  const currentPollData = renderPoll(question, optionA, optionB, votesA, votesB);
  currentPollEl.append(currentPollData);
};


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

