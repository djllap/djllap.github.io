'use strict';
// TERMINOLOGY:
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
  let wrong = STORE.quizObj.wrongAnswers;

  return `
    <p class="stats">
      <span>Question: ${currentQuestion}/${totalQuestions}</span>
      <span>
        <span class="stats-correct">Correct: ${score}</span>
        <span>Incorrect: ${wrong}</span>
      </span>
    </p>
  `;
}

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
      <fieldset>
        <div class="inputButton">
          <input type="radio" name="choice" value="0" id="choice1"/>
          <label id="firstOption" for="choice1" >${question.options[0].text}</label>
          <br>
        </div>
        <div class="inputButton">
          <input type="radio" name="choice" value="1" id="choice2"/>
          <label for="choice2">${question.options[1].text}</label>
          <br>
        </div>
        <div class="inputButton">
          <input type="radio" name="choice" value="2" id="choice3"/>
          <label for="choice3">${question.options[2].text}</label>
          <br>
        </div>
        <div class="inputButton">
          <input type="radio" name="choice" value="3" id="choice4"/>
          <label for="choice4">${question.options[3].text}</label>
        </div>
      </fieldset>
      <button class="submit-button" type="submit">SUBMIT</button>
    </form>
  `;
}

function generateFeedback(feedbackObj) {
  let submitText;
  if (STORE.quizObj.pageIndex === STORE.quizObj.questions.length-1) {
    submitText = 'See Results';
  } else {
    submitText = 'Next Question';
  }
  return `
    <h2 class="feedback-h2">${feedbackObj.title}</h2>
    <div class="imageHolder">
      <img 
        alt="${STORE.quizObj.questions[STORE.quizObj.pageIndex].feedback.img.alt}" 
        src="${STORE.quizObj.questions[STORE.quizObj.pageIndex].feedback.img.url}">
      </img>
    </div>
    <p>${feedbackObj.text}</p>
    <form action="submit" id="js-feedback-box-form">
      <button class="submit-button" type="submit">${submitText}</button>
    </form>
  `;
}

// pageIndex: questions.length
function generateResults() {
  let score = STORE.quizObj.score;
  const img = {};
  let message = '';
  if (score >= 4) {
    img.url = 'resources/img/happy_dinosaur.jpg';
    img.alt = 'Happy dinosaur';
    message = 'You actually know a thing or two about dinosaurs. I\'m impressed! You know, I have a great idea for a dinosaur park, where we bring all the dinosaurs back to life and charge other people a ton of money to see them. Instant Profit! What could go wrong?';
  } else if (score <= 3) {
    img.url = 'resources/img/sad_dinosaur.jfif';
    img.alt = 'sad dinosaur';
    message = 'The dinosaurs are all greatly disappointed in you. You know nothing about them. How can you face the future when when do not know the past?';
  }

  return `
    <h2 class='results-score'>Final Score: ${score / 5 * 100}%</h2>
    <div class="results">   
      <img src=${img.url} alt=${img.alt}</img>
      <p class="results-message">${message}</p>
    </div>
    <form action="submit" id="js-results-form">
      <button class="submit-button" type="submit">Start Over!</button>
    </form>
  `;
}

// SECTION: - Putting the HTML into the DIVs

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
    renderQuestion();
  } else if (nav === 'results') {
    renderResults();
  }

}

// SECTION: - Handlers

function handleLandingSubmit() {
  $('.container').on('submit', '#js-landing-form', function (event) {
    event.preventDefault();
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

    if (correctOption === chosenValue) {
      STORE.quizObj.score += 1;
      renderFeedback(true);
    } else {
      STORE.quizObj.wrongAnswers += 1;
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
    STORE.quizObj.nav = 'quiz';
    STORE.quizObj.score = 0;
    STORE.quizObj.pageIndex = 0;
    renderBox();
  });
}

function handleRadioToggle() {
  $('.container').on('click', '.inputButton', function (event) {
    event.stopPropagation();
    let input = $(this).find('input');  
    input.prop('checked', true);

    //applies styles to selected option
    $(this).closest('fieldset').children().removeClass('depressed');
    $(this).toggleClass('depressed');
  });
}

// SECTION: - Main
function handleQuestionBox() {
  renderBox();
  handleQuizSubmit();
  handleFeedbackSubmit();
  handleLandingSubmit();
  handleResultsSubmit();
  handleRadioToggle();
}

$(handleQuestionBox);
