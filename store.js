const STORE = {
    quizObj: {
        // Index '0' is the landing page.
        // Index 'questions.length' is the 'done with quiz' page.
        pageIndex: 0,
        questions: [
            {
                number: 1,
                title: 'Question 1',
                text: 'Which is the biggest dinosaur?',
                options: [
                    {
                        text: 'T-Rex',
                        isCorrect: true,
                    },
                    {
                        text: 'T-Minus',
                        isCorrect: false,
                    },
                    {
                        text: 'T-Minus-Minus',
                        isCorrect: false,
                    },
                    {
                        text: 'T-Minus-Minus-Minus',
                        isCorrect: false,
                    },
                ],
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