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
    const data = new FormData(newPollEl);
    const userQuestion = data.get('question');
    const userOptionA = data.get('questionA');
    const userOptionB = data.get('questionB');
    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;


    displayCurrentPoll();

});

optionAAddButton.addEventListener('click', () => {
    votesA++;
    console.log('votesA');
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

finishPollButton.addEventListener('click', () => {
    pastPollsContainer.textContent = '';
    displayPastPolls();
    votesA = 0;
    votesB = 0;
    currentPollEl.textContent = '';
});

function renderPoll(question, optionA, optionB, votesA, votesB) {
    const nowPollEl = document.createElement('div');
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
    votesAEl.classList.add('votesA');
    votesBEl.classList.add('votesB');

    nowPollEl.append(questionEl, userOptionA, userOptionB, votesA, votesB);
    return nowPollEl;





}

function displayCurrentPoll() {
    newPollEl.reset();
    currentPollEl.textContent = '';
    const currentPollData = renderPoll(question, optionA, optionB, votesA, votesB);
    currentPollEl.append(currentPollData);
}

function displayPastPolls() {
    const pastPoll = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        votesA: votesA,
        votesB: votesB
    };
    pastPolls.push(pastPoll);

    for (let poll of pastPolls) {
        const currentPastPoll = renderPoll(poll.question, poll.optionA, poll.optionB, poll.votesA, poll.votesB);
        pastPollsContainer.append(currentPastPoll);
    }
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

