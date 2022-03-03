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
      question: "Which of the following is a similarity between Sikhism and Hinduism?",
      answers: {
        a: "Monotheism",
        b: "Polytheism",
        c: "The karmic cycle of reincarnation cannot be overcome until each person achieves oneness with God"
      },
      correctAnswer: "c"
    },
    {
      question: "Which of the following is a similarity between Sikhism and Islam?",
      answers: {
        a: "Monotheism",
        b: "Polyheism",
        c: "Sultans"
      },
      correctAnswer: "a"
    },
    {
      question: "The British East India Company was created to create a monopoly on...",
      answers: {
        a: "Tea",
        b: "Spice",
        c: "Oil"
      },
      correctAnswer: "b"
    },
    {
      question: "British Soliders in India...",
      answers: {
        a: "Sepoys",
        b: "Redcoats",
        c: "Yankees"
      },
      correctAnswer: "a"
    },
    {
      question: "Civil rights leader in India...",
      answers: {
        a: "Nelson Mandela",
        b: "Martin Luther King Jr.",
        c: "Mohandas Gandhi"
      },
      correctAnswer: "c"
    },
    {
      question: "What was the company that imperialized India?",
      answers: {
        a: "British West India Company",
        b: "British East India Company",
        c: "British North India Company"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();