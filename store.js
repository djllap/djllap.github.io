'use strict';

const STORE = {

  quizObj: {
    // Index '0' is the landing page.
    // Index 'questions.length' is the 'done with quiz' page.
    pageIndex: 0,
    score: 0,
    questions: [
      {
        title: 'How much do you know about Dinosaurs?',
        text: 'Everyone loves Dinosaurs, but how much do we really know about them? Take this quiz to find out if your knowledge is up to snuff.',
        img: {
          url: '/resources/img/dinosaurs.jpeg',
          alt: 'Grazing dinosaurs'
        }
      },
      {
        title: 'Question 1',
        text: 'What was the largest canivorous dinosaur?',
        img: {
          url: '/resources/img/t-rex.jpg',
          alt: 'T-rex'
        },
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
          img: {
            url: 'resources/img/spinosaurus.jpg',
            alt: 'Spinosaurus'
          },
          correct: {
            title: 'CORRECT',
            text: 'Wow, you really know your stuff!'
          },
          incorrect: {
            title: 'WRONG',
            text: 'The largest known carnivorous dinosaur is the Spinosaurus, which could grow to be over 50 feet long and weighed in at over 20 tonnes -- three times the weight of a T-rex.'
          }
        },
      },

      {
        title: 'Question 2',
        text: 'What was the the first dinosaur ever discovered?',
        img: {
          url: '/resources/img/paleontology.jpg',
          alt: 'Dinosaur Bones'
        },
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
          img: {
            url: '/resources/img/megalosaurus.gif',
            alt: 'Megalosaurus'
          },
          correct: {
            title: 'CORRECT',
            text: 'Wow, did you really know that, or did you look it up?'
          },
          incorrect: {
            title: 'WRONG',
            text: 'The Megalosaurus was the first dinosuar discovererd and wasn\'t found until the 1820s'
          }
        }
      },

      {
        title: 'Question 3',
        text: 'What does the word dinosaur mean?',
        img: {
          url: '/resources/img/confused-dinosaur.jpg',
          alt: 'Confused Dinosaur'
        },
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
          img: {
            url: '/resources/img/terrible.jpg',
            alt: 'Terrible Lizzard Comic Book Cover'
          },
          correct: {
            title: 'CORRECT',
            text: 'Don\'t let it go to your head too much.'
          },
          incorrect: {
            title: 'WRONG',
            text: 'The term “dinosaur” wasn\'t coined until 1842, by English paleontologist Sir Richard Owen; "dinosaur" translates to “terrible reptile.”'
          }
        }
      },

      {
        title: 'Question 4',
        text: 'What were the plates on a stegosaurus\'s back used for?',
        img: {
          url: '/resources/img/stego.jpg',
          alt: 'Stegosaurus'
        },
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
          img: {
            url: '/resources/img/blood-vessels.jpg',
            alt: 'stegosaurus plate blood vessels'
          },
          correct: {
            title: 'CORRECT',
            text: 'Are you sure you\'re not cheating? How could you possibly know that?'
          },
          incorrect: {
            title: 'WRONG',
            text: 'Veins in Stegosaurus\' spinal plates suggested that they would not have been used as protective armor; more than likely, they were used to help the dinosaur cool off its massive body.'
          }
        }
      },

      {
        title: 'Question 5',
        text: 'What dinosaur had the largest head?',
        img: {
          url: '/resources/img/big-head.jpeg',
          alt: 'Dinosaur bobblehead'
        },
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
          img: {
            url: '/resources/img/triceratops.jpg',
            alt: 'Triceratops skull'
          },
          correct: {
            title: 'CORRECT',
            text: 'Good job, I guess.'
          },
          incorrect: {
            title: 'WRONG',
            text: 'The Triceratops had the largest shielded skull of any known dinosaur. With a thick bony shield that covered its neck, a Triceratops skull could grow to be as long as 6 and ½ feet long.'
          }
        }
      },
    ]
  }    
};