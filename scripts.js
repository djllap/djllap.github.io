'use strict';
// TERMINOLOGY:
// 'Stats and Header' is the top of the question box
// 'Question Container' holds the question itself


// SECTION: - Generating HTML Code

// Initialize all containers (Run once at the beginning)

// pageIndex: -1
function generateLanding() {
  return `
    <h2>How much do you know about Dinosaurs?</h2>
    <div class="imageHolder">
      <img alt="Dinosaurs Grazing" src="/resources/img/dinosaurs.jpeg"></img>
    </div>
    <p>Everyone loves Dinosaurs, but how much do we really know about them? Take this quiz to find out if your knowledge is up to snuff.</p>
    <form id="js-landing-form">
      <button class="submit-button" type="submit">BEGIN QUIZ</button>
    </form>
  `;
}

// pageIndex: 0 to questions.length - 1
function generateStats() {
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

// function generateQuestion(question) {
//   return `
//     <h2>${question.title}</h2>
//     <div class="imageHolder">
//       <img alt="${question.img.alt}"s6 src="${question.img.url}"></img>
//     </div>
//     <p class="question">
//       ${question.text}
//     </p>
//     <form action="submit" id="js-question-box-form" class="question-form">
//       <fieldset class='inputButton'>
//         <label for="choice1"><input type="radio" name="choice" value="0" id="choice1">${question.options[0].text}</label><br>
//       </fieldset>

//     </form>
//   `;
// }


function generateQuestion(question) {
  return `
    <h2>${question.title}</h2>
    <div class="imageHolder">
      <img alt="${question.img.alt}"s6 src="${question.img.url}"></img>
    </div>
    <p class="question">
      ${question.text}
    </p>
    <form action="submit" id="js-question-box-form" class="question-form">
      <div class="inputButton">
        <input type="radio" name="choice" value="0" id="choice1">
        <label id="firstOption" for="choice1" >${question.options[0].text}</label>
        <br>
      </div>
      <div class="inputButton">
        <input type="radio" name="choice" value="1" id="choice2">
        <label for="choice2">${question.options[1].text}</label>
        <br>
      </div>
      <div class="inputButton">
        <input type="radio" name="choice" value="2" id="choice3">
        <label for="choice3">${question.options[2].text}</label>
        <br>
      </div>
      <div class="inputButton">
        <input type="radio" name="choice" value="3" id="choice4">
        <label for="choice4">${question.options[3].text}</label>
      </div>
      <button class="submit-button" type="submit">CLICK ME!</button>
    </form>
  `;
}

function generateFeedback(feedbackObj) {
  console.log(feedbackObj);
  return `
    <h2>${feedbackObj.title}</h2>
    <div class="imageHolder">
      <img 
        alt="${STORE.quizObj.questions[STORE.quizObj.pageIndex].feedback.img.alt}" 
        src="${STORE.quizObj.questions[STORE.quizObj.pageIndex].feedback.img.url}">
      </img>
    </div>
    <p>${feedbackObj.text}</p>
    <form action="submit" id="js-feedback-box-form">
      <button class="submit-button" type="submit">Next Question</button>
    </form>
  `;
}

// pageIndex: questions.length
function generateResults() {

  let currentQuestion = STORE.quizObj.pageIndex + 1;
  let totalQuestions = STORE.quizObj.questions.length;
  let score = STORE.quizObj.score;

  return `
    <h2>Quiz Completed!</h2>
    <div class="results">
      <h3>Final Score: ${score / 5 * 100}%</h3>
    </div>
    <form action="submit" id="js-results-form">
      <button class="submit-button" type="submit">Start Over!</button>
    </form>
  `;
}

// SECTION: - Putting the HTML into the DIVs

function initQuestion() {
  console.log('initQuestion ran');
  // Run this when generating questions.
  // This should init the <div>'s we are working with.
  let index = STORE.quizObj.pageIndex;
  let question = STORE.quizObj.questions[index];

  // Init Empty Divs
  // $('.container-tile').html(generateInitQuestionBox);

  // Fill the Landing <div>
  $('.container').html(generateLanding());
}

function renderQuestion() {
  // Renders the Question Box content
  let index = STORE.quizObj.pageIndex;
  let question = STORE.quizObj.questions[index];

  // const statsAndHeader = generateStatsAndHeader();
  $('.container').html(generateStats() + generateQuestion(question));
}

function renderFeedback(feedbackBool) {
  // Renders the Answer Box content
  let index = STORE.quizObj.pageIndex;
  let question = STORE.quizObj.questions[index];
  let feedback = question.feedback;

  if (feedbackBool) {
    $('.container').html(generateStats() + generateFeedback(feedback.correct));
  } else {
    $('.container').html(generateStats() + generateFeedback(feedback.incorrect));
  }
}

function renderResults() {
  // Renders Results Content
  $('.container').html(generateResults());
}

function renderBox() {
  let nav = STORE.quizObj.nav;
  if (nav === 'landing') {
    $('.container').html(generateLanding());
  } else if (nav === 'quiz') {
    let index = STORE.quizObj.pageIndex;
    let question = STORE.quizObj.questions[index];
    renderQuestion();
  } else if (nav === 'results') {
    renderResults();
  }

}

// SECTION: - Handlers

function handleLandingSubmit() {
  $('.container').on('submit', '#js-landing-form', function (event) {
    event.preventDefault();
    console.log('handle landing submit ran');
    STORE.quizObj.nav = 'quiz';
    renderBox();
  });
}

function handleQuizSubmit() {
  $('.container').on('submit', '#js-question-box-form', function (event) {
    event.preventDefault();

    let pageIndex = STORE.quizObj.pageIndex;
    let questionOptions = STORE.quizObj.questions[pageIndex].options;
    let correctOption = questionOptions.findIndex(option => option.isCorrect === true);

    // Grab the 'checked' radio value on submit (as Int)
    let chosenValue = Number(document.querySelector('input[name="choice"]:checked').value);

    // DEBUG: - Feedback on Question
    // alert(`correctOption: ${correctOption}, chosenValue: ${chosenValue}`);
    // alert(correctOption === chosenValue ? 'correct!' : 'incorrect!');

    if (correctOption === chosenValue) {
      STORE.quizObj.score += 1;
      renderFeedback(true);
    } else {
      renderFeedback(false);
    }

  });
}

function handleFeedbackSubmit() {
  $('.container').on('submit', '#js-feedback-box-form', function (event) {
    event.preventDefault();
    // Increment the Page
    if (STORE.quizObj.pageIndex === STORE.quizObj.questions.length - 1) {
      STORE.quizObj.nav = 'results';
    }
    STORE.quizObj.pageIndex += 1;
    renderBox();
  });
}

function handleResultsSubmit() {
  $('.container').on('submit', '#js-results-form', function (event) {
    event.preventDefault();
    console.log('handleResultsSubmit ran');
    STORE.quizObj.nav = 'quiz';
    STORE.quizObj.score = 0;
    STORE.quizObj.pageIndex = 0;
    renderBox();
  });
}

function handleTest() {
  $('.container').on('click', '.inputButton', function (event) {

    event.stopPropagation();
    // console.log($(this));
    // let label = $(this).find("label");

    // console.log(label.prop('id'));
    // $('#' + label.prop('id')).click();

    let input = $(this).find("input").attr('checked', !$(this).find("input").attr('checked'));

    // console.log(input);
    // console.log(label);
    // // alert("hi");

    // // this.checked = true;

    // // console.log($(this).find("input"));
    // let button = $(this).find("input");
    // let checkedState = button.prop('checked');

    // if (checkedState) {
    //   button.attr('checked', false);
    // } else {
    //   button.attr('checked', true);
    // renderBox();
  });
}


// function handleChecked() {
//   $('.container').on('checked', '')
// }


// SECTION: - Main
function handleQuestionBox() {
  renderBox();
  handleQuizSubmit();
  handleFeedbackSubmit();
  handleLandingSubmit();
  handleResultsSubmit();
  handleTest();
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