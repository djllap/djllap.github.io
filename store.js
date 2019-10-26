'use strict';

const STORE = {
  quizObj: {
    // Index '0' is the landing page.
    // Index 'questions.length' is the 'done with quiz' page.
    pageIndex: 0,
    questions: [
      {
        title: 'How much do you know about Dinosaurs?'
        text: 'Everyone loves Dinosaurs, but how much do we really know about them? Take this quiz to find out if your knowledge is up to snuff.'
      },

      {
        title: 'Question 1',
        text: 'What was the largest canivorous dinosaur?',
        img: '',
        options: [
          {
            text: 'Allosaurus',
            isCorrect: false,
          },
          {
            text: 'Baryonyx',
            isCorrect: false,
          },
          {
            text: 'Spinosaurus',
            isCorrect: true,
          },
          {
            text: 'Megalosaurus',
            isCorrect: false,
          },
        ],

        feedback: {
          correct: {
            title: '',
            text: '',
            img: ''
          },
          incorect: {
            title: '',
            text: '',
            img: ''
          }
        }
      },
      {

      },
      {

      }
    ]
  }    
}

// let option1 = ["sdfds", true,];

// function optionConstructorHelper(text, isCorrect) {
//     return {
//         text,
//         isCorrect
//     }
// }

// function optionOtherHelper(optionArray) {
//     return optionConstructorHelper(optionArray[0], optionArray[1]);
// }

// function optionsConstructor(option_1, option_2, option_3, option_4) {
//     return {
//         option_1,
//         option_2,
//         option_3,
//         option_4,
//     }
// }



// function questionConstructor(title, text, options) {
//     return {
//         title,
//         text,
//         options
//     }
// }