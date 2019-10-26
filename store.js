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
        title: 'Question 3',
        text: 'What does the word dinosaur mean?',
        img: '',
        options: [
          {
            text: 'Terrible Lizzard',
            isCorrect: true,
          },
          {
            text: 'Giant Creature',
            isCorrect: false,
          },
          {
            text: 'Big-Boned',
            isCorrect: false,
          },
          {
            text: 'Horrific Bird',
            isCorrect: false,
          },
        ],

        feedback: {
          correct: {
            title: 'CORRECT',
            text: 'Don\'t let it go to your head too much.',
            img: ''
          },
          incorect: {
            title: 'WRONG',
            text: 'The term “dinosaur” wasn\'t coined until 1842, by English paleontologist Sir Richard Owen; "dinosaur" translates to “terrible reptile.”',
            img: ''
          }
        }
      },

      {
        title: 'Question 4',
        text: 'What were the plates on a stegosaurus\'s back used for?',
        img: '',
        options: [
          {
            text: 'Cooling',
            isCorrect: true,
          },
          {
            text: 'Armor',
            isCorrect: false,
          },
          {
            text: 'Aerodynamics',
            isCorrect: false,
          },
          {
            text: 'Flight',
            isCorrect: false,
          },
        ],

        feedback: {
          correct: {
            title: 'CORRECT',
            text: 'Are you sure you\'re not cheating? How could you possibly know that?',
            img: ''
          },
          incorect: {
            title: 'WRONG',
            text: 'Veins in Stegosaurus\' spinal plates suggested that they would not have been used as protective armor; more than likely, they were used to help the dinosaur cool off its massive body.',
            img: ''
          }
        }
      },

      {
        title: 'Question 5',
        text: 'What dinosaur had the largest head?',
        img: '',
        options: [
          {
            text: 'Diplodocus',
            isCorrect: false,
          },
          {
            text: 'Carnotaurus',
            isCorrect: false,
          },
          {
            text: 'Gigantosaurus',
            isCorrect: false,
          },
          {
            text: 'Triceratops',
            isCorrect: true,
          },
        ],

        feedback: {
          correct: {
            title: 'CORRECT',
            text: 'Good job, I guess.',
            img: ''
          },
          incorect: {
            title: 'WRONG',
            text: 'The Triceratops had the largest shielded skull of any known dinosaur. With a thick bony shield that covered its neck, a Triceratops skull could grow to be as long as 6 and ½ feet long.',
            img: ''
          }
        }
      },
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