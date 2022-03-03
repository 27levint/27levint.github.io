(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Why was China separated from other civilizations?",
      answers: {
        a: "Distance",
        b: "Distance and Physical Barriers",
        c: "Physical Barriers"
      },
      correctAnswer: "b"
    },
    {
      question: "What is one difference between North China and South China",
      answers: {
        a: "One spoke English, one didn't",
        b: "One was part of an empire",
        c: "Climate"
      },
      correctAnswer: "c"
    },
    {
      question: "The mountain range Kunlun Shan is in the ____ of China",
      answers: {
        a: "North",
        b: "East",
        c: "West",
      },
      correctAnswer: "c"
    },
    {
      question: "Why is China no longer separated from other civilizations?",
      answers: {
        a: "People can travel faster than before",
        b: "Modern technology",
        c: "The barriers are shrinking"
      },
      correctAnswer: "b"
    },
    {
      question: "Why was it important for China to conquer Tibet?",
      answers: {
        a: "To Have more land for farming",
        b: "To Control Their water supply",
        c: "Prevent Invasions from the Tibetans"
      },
      correctAnswer: "b"
    },
    {
      question: "What is a Plateau?",
      answers: {
        a: "A flat elevated area of land",
        b: "Full of rivers with deep cresting valleys",
        c: "Grassy with lush vegetation and lots of trees and arable farmland"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the Name of the soil carried by the yellow/yangtze river",
      answers: {
        a: "Dirt",
        b: "Loess",
        c: "Silt"
      },
      correctAnswer: "b"
    },
    {
      question: "North and south China are part of the...",
      answers: {
        a: "mainland",
        b: "heartland",
        c: "midwest"
      },
      correctAnswer: "b"
    },
    {
      question: "Deserts are...",
      answers: {
        a: "Volatile in temperature, sandy, dry, and windy. Deserts are also rich in oil.",
        b: "Always hot year-round, no matter the season",
        c: "Places with some arable farmland"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the Name of the Dam along the Huang He river?",
      answers: {
        a: "Three Gorges Dam",
        b: "People's dam of china",
        c: "Mao Zedong Dam"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();