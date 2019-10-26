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
            title: 'CORRECT',
            text: 'Wow, you really know your stuff!',
            img: ''
          },
          incorect: {
            title: 'WRONG',
            text: 'The largest known carnivorous dinosaur is the Spinosaurus, which could grow to be over 50 feet long and weighed in at over 20 tonnes -- three times the weight of a T-rex.',
            img: ''
          }
        }
      },

      {
        title: 'Question 2',
        text: 'What was the the first dinosaur ever discovered?',
        img: '',
        options: [
          {
            text: 'Ornithomimus',
            isCorrect: false,
          },
          {
            text: 'Giganotosaurus',
            isCorrect: false,
          },
          {
            text: 'Brachiosaurus',
            isCorrect: false,
          },
          {
            text: 'Megalosaurus',
            isCorrect: true,
          },
        ],

        feedback: {
          correct: {
            title: 'CORRECT',
            text: 'Wow, did you really know that, or did you look it up?',
            img: ''
          },
          incorect: {
            title: 'WRONG',
            text: 'The Megalosaurus was the first dinosuar discovererd and wasn\'t found until the 1820s',
            img: ''
          }
        }
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