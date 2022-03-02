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
      question: "What is the Solar System?",
      answers: {
        a: "The Sun",
        b: "All the planets",
        c: "The Sun and every thing that orbits it",
        d: "The Milky Way"
      },
      correctAnswer: "c"
    },
    {
      question: "What is an AU?",
      answers: {
        a: "93,000,000",
        b: "93,000 miles",
        c: "93,000,000 miles",
        d: "93 milion miles"
      },
      correctAnswer: "c"
    },
    {
      question: "What gives Mars its red color?",
      answers: {
        a: "Iron",
        b: "Coal",
        c: "Silver",
        d: "Rusted metal"
      },
      correctAnswer: "a"
    },
    {
      question: "How many moons does Neptune have?",
      answers: {
        a: "3",
        b: "13",
        c: "5",
        d: "17"
      },
      correctAnswer: "b"
    },
    {
      question: "How long would it take to drive to the moon?",
      answers: {
        a: "160 days",
        b: "180 days",
        c: "100 days",
        d: "4 days"
      },
      correctAnswer: "a"
    },
    {
      question: "How far is Earth from the Sun?",
      answers: {
        a: "93 miles",
        b: "93 million miles",
        c: "93 billion miles"
      },
      correctAnswer: "b"
    },
    {
      question: "How many moons are in our Solar System?",
      answers: {
        a: "200",
        b: "1",
        c: "181",
        d: "19"
      },
      correctAnswer: "c"
    },
    {
      question: "What is Pluto?",
      answers: {
        a: "A planet",
        b: "Whack",
        c: "A Dwarf planet"
      },
      correctAnswer: "c"
    },
    {
      question: "What leads a comet?",
      answers: {
        a: "Tail",
        b: "Head"
      },
      correctAnswer: "a"
    },
    {
      question: "Does Pluto have a moon?",
      answers: {
        a: "No",
        b: "Yes"
      },
      correctAnswer: "b"
    },
    {
      question: "Which are Dwarf Planets?",
      answers: {
        a: "Ceres and Eros",
        b: "Series and Eros",
        c: "Hummus and Pluto",
        d: "Makemake and Eris"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();