
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

function renderQuestionTitle() {
    // Renders the 'Title ${questionNumber}'
}

function renderQuestionText() {
    // Renders the text of the question
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
    renderStats();
    renderQuestionTitle();
    renderQuestionText();
    renderQuestionOptions();
    renderFeedback();
}

function testHTML() {

}

function test() {
    $('.container-tile').html('"Hello World"');
}

// test();