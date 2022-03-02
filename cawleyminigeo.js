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
      question: "What is a complementary angle?",
      answers: {
        a: "Two angles whose measurement adds up to 90 degrees",
        b: "Two rays",
        c: "Two angles whose measurement adds up to 180 degrees"
      },
      correctAnswer: "a"
    },
    {
      question: "What is an alternate exterior angle?",
      answers: {
        a: "On opposite sides of the transversal, on the interior",
        b: "On opposite sides of the transversal, on the exterior",
        c: "Vertical angles on opposite sides of the transversal"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the supplement of a 106 degree angle?",
      answers: {
        a: "255 degree angle",
        b: "74 degree angle",
        c: "29 degree angle",
      },
      correctAnswer: "b"
    },
    {
      question: "What is a vertical angle?",
      answers: {
        a: "Two angles next to each other",
        b: "They are congruent",
        c: "Two angles that are diagonal to each other"
      },
      correctAnswer: "c"
    },
    {
      question: "The angles in a triangle add up to...",
      answers: {
        a: "180 degrees",
        b: "360 degrees",
        c: "90 degrees"
      },
      correctAnswer: "a"
    },
    {
      question: "Corresponding angles are...",
      answers: {
        a: "Fractions",
        b: "Congruent",
        c: "Add up to 180 degrees"
      },
      correctAnswer: "b"
    },
    {
      question: "Angles are made of...",
      answers: {
        a: "Lines",
        b: "Triangles",
        c: "Rays"
      },
      correctAnswer: "c"
    },
    {
      question: "What does parallel mean?",
      answers: {
        a: "Two lines that run next to each other and never meet",
        b: "Lines that intersect",
        c: "Rays that make up an angle"
      },
      correctAnswer: "a"
    },
    {
      question: "Complement to a 45 degree angle",
      answers: {
        a: "35 degree angle",
        b: "135 degree angle",
        c: "45 degree angle"
      },
      correctAnswer: "c"
    },
    {
      question: "What is an alternate interior angle?",
      answers: {
        a: "On opposite sides of the transversal, on the interior",
        b: "On opposite sides of the transversal, on the exterior",
        c: "Vertical angles on opposite sides of the transversal"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();