'use strict';

function handleStartQuiz() {
  // Begins the Quiz -> Change View to Question 1
}

function handleQuestionSubmit() {
  // Check to see if correct
  // Update information
  // Navigate to confirmation page
}

// Rendering
// CORRECT PAGE - INCORRECT PAGE 

// function renderFeedbackPage(bool: )

function renderFeedback(question) {
  // check right/wrong -> display page

  // // Change submit button to a 'next page' button
  // // Display confirmation text
}

// function renderQuestionTitle(question) {
//   // Renders the 'Title ${questionNumber}'
//   return `<h2>${question.title}</h2>`;

// }

function renderQuestionText(question) {
  // Renders the text of the question
  return `<p class="question">${question.text}</p>`;
}

function renderRadio() {
  // Renders the Radio Buttons
}

function renderQuestionOptions() {
  renderRadio();
}

function renderStats() {
  // Renders the stats: - question number + correct/incorrect
}


function renderQuestionBox() {
  // Renders the Question Box content
  let index = 0;
  let question = STORE.quizObj.questions[index];
  $('.container-tile').html(`
    <p class="stats">
      <span>current question</span>
      <span>current score</span>
    </p>
    <h2>${question.title}</h2>
    <div class="question-container">
      <p class="question">
        ${question.text}
      </p>
      <form action="submit">
        <input type="radio" name="choice1" id="putid1here">choice 1<br>
        <input type="radio" name="choice2" id="putid2here">choice 2<br>
        <input type="radio" name="choice3" id="putid3here">choice 3<br>
        <input type="radio" name="choice4" id="putid4here">choice 4<br>
        <button class="submit-button" type="submit">CLICK ME!</button>
      </form>
    </div>
  `);
}

function testHTML() {
  $('.container-tile').html(
    renderQuestionTitle(STORE.quizObj.questions[0]) +
    renderQuestionText(STORE.quizObj.questions[0])
  );
}

function test() {
  $('.container-tile').html('"Hello World"');
}

function run() {

}



renderQuestionBox();