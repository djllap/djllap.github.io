'use strict';

// TERMINOLOGY:
// 'Stats and Header' is the top of the question box
// 'Question Container' holds the question itself


// SECTION: - Generating HTML Code

// Initialize all containers (Run once at the beginning)
function generateInitQuestionBox() {
  return `
    <div class="stats-and-header">
      <p class="stats">
          <span></span>
          <span></span>
      </p>
      <h2></h2>
    </div>
    <div class="question-container">
    </div>
    <div class="feedback-container">
    </div>
    <div class="landing-container">
    </div>
    <div class="results-container">
    </div>
  `;
}

// pageIndex: -1
function generateLandingContainer() {
  return  `
    <h2>BEGIN QUIZ</h2>
    <form id="js-landing-form">
      <button class="submit-button" type="submit">BEGIN QUIZ</button>
    </form>
  `
}

// pageIndex: 0 to questions.length - 1
function generateStatsAndHeader() {
  let currentQuestion = STORE.quizObj.pageIndex + 1;
  let totalQuestions = STORE.quizObj.questions.length;
  let score = STORE.quizObj.score;

  return `
    <p class="stats">
      <span>Question: ${currentQuestion}/${totalQuestions}</span>
      <span>Score: ${score}</span>
    </p>
  `;
}

function generateQuestionContainer(question) {
  return `
    <h2>${question.title}</h2>
    <p class="question">
      ${question.text}
    </p>
    <form action="submit" id="js-question-box-form">
      <input type="radio" name="choice" value="0">${question.options[0].text}<br>
      <input type="radio" name="choice" value="1">${question.options[1].text}<br>
      <input type="radio" name="choice" value="2">${question.options[2].text}<br>
      <input type="radio" name="choice" value="3">${question.options[3].text}<br>
      <button class="submit-button" type="submit">CLICK ME!</button>
    </form>
  `;
}

function generateFeedbackContainer(feedbackObj) { 
  return `
    <h2>${feedbackObj.title}</h2>
    <p>${feedbackObj.text}</p>
    <form action="submit" id="js-feedback-box-form">
      <button class="submit-button" type="submit">Next Question</button>
    </form>
  `;
}

// pageIndex: questions.length
function generateResultsContainer() {

  let currentQuestion = STORE.quizObj.pageIndex + 1;
  let totalQuestions = STORE.quizObj.questions.length;
  let score = STORE.quizObj.score;

  return `
    <h2>Quiz Completed!</h2>
    <div class="results">
      <h3>Final Score: ${score}</h3>
    </div>
    <form>
      <button class="submit-button" type="submit">Start Over!</button>
    </form>
  `;
}

// SECTION: - Putting the HTML into the DIVs

function initQuestionBox() {
  // Run this when generating questions.
  // This should init the <div>'s we are working with.
  let index = STORE.quizObj.pageIndex;
  let question = STORE.quizObj.questions[index];
  
  // Init Empty Divs
  $('.container-tile').html(generateInitQuestionBox);

  // Fill the Landing <div>
  $('.landing-container').html(generateLandingContainer());
}

function renderQuestionBox() {
  // Renders the Question Box content
  let index = STORE.quizObj.pageIndex;
  let question = STORE.quizObj.questions[index];

  // const statsAndHeader = generateStatsAndHeader();
  $('.stats-and-header').html(generateStatsAndHeader());
  $('.question-container').html(generateQuestionContainer(question));
  $('.feedback-container').html('');
}

function renderFeedbackBox(feedbackBool) {
  // Renders the Answer Box content
  let index = STORE.quizObj.pageIndex;
  let question = STORE.quizObj.questions[index];
  let feedback = question.feedback;

  if(feedbackBool) {
    $('.feedback-container').html(generateFeedbackContainer(feedback.correct));
  } else {
    $('.feedback-container').html(generateFeedbackContainer(feedback.incorrect));
  }
  $('.question-container').html('');
}

function renderResultsBox() {
  // Renders Results Content
  $('.stats-and-header').html('');
  $('.feedback-container').html('');
  $('.results-container').html(generateResultsContainer());
}

// SECTION: - Handlers

function handleLandingSubmit() {
  $('.landing-container').on('submit', '#js-landing-form', function (event) {
    event.preventDefault();
    
    $('.landing-container').html('');
    renderQuestionBox();
  });
}

function handleQuizSubmit() {
  $('.question-container').on('submit', '#js-question-box-form', function (event) {
    event.preventDefault();

    let pageIndex = STORE.quizObj.pageIndex;
    let questionOptions = STORE.quizObj.questions[pageIndex].options;
    let correctOption = questionOptions.findIndex(option => option.isCorrect === true);

    // Grab the 'checked' radio value on submit (as Int)
    let chosenValue = Number(document.querySelector('input[name="choice"]:checked').value);

    // DEBUG: - Feedback on Question
    // alert(`correctOption: ${correctOption}, chosenValue: ${chosenValue}`);
    // alert(correctOption === chosenValue ? 'correct!' : 'incorrect!');

    if(correctOption === chosenValue) {
      STORE.quizObj.score += 1;
      renderFeedbackBox(true);
    } else {
      renderFeedbackBox(false);
    }

  });
}

function handleFeedbackSubmit() {
  $('.feedback-container').on('submit', '#js-feedback-box-form', function (event) {
    event.preventDefault();
    
    // Increment the Page
    if(STORE.quizObj.questions.length - 1 === STORE.quizObj.pageIndex) {
      // alert('quiz finished!');
      renderResultsBox();
    } else {
      STORE.quizObj.pageIndex += 1;
      renderQuestionBox();
    }
  });
}


// SECTION: - Main
function handleQuestionBox() {
  initQuestionBox();
  handleQuizSubmit();
  handleFeedbackSubmit();
  handleLandingSubmit();
}

$(handleQuestionBox);



// // function handleStartQuiz() {
// //   // Begins the Quiz -> Change View to Question 1
// // }

// // function handleQuestionSubmit() {
// //   // Check to see if correct
// //   // Update information
// //   // Navigate to confirmation page
// // }

// // Rendering
// // CORRECT PAGE - INCORRECT PAGE 

// // function renderFeedbackPage(bool: )

// function renderFeedback(question) {
//   // check right/wrong -> display page

//   // // Change submit button to a 'next page' button
//   // // Display confirmation text
// }

// // function renderQuestionTitle(question) {
// //   // Renders the 'Title ${questionNumber}'
// //   return `<h2>${question.title}</h2>`;

// // }

// // function renderQuestionText(question) {
// //   // Renders the text of the question
// //   return `<p class="question">${question.text}</p>`;
// // }

// // function renderRadio() {
// //   // Renders the Radio Buttons
// // }

// // function renderQuestionOptions() {
// //   renderRadio();
// // }

// function renderStats() {
//   // Renders the stats: - question number + correct/incorrect
// }