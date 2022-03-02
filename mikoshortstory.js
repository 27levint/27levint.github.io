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
      question: "What is a protagonist?",
      answers: {
        a: "The villain, who must stop the hero at all costs",
        b: "The main character, around whom the story revolves",
        c: "A term found in old poems",
        d: "A character who must be from the future"
      },
      correctAnswer: "b"
    },
    {
      question: "What is an antagonist?",
      answers: {
        a: "The character that prevents the protagonist from achieving his or her goal or resolving their conflict.",
        b: "The character or force that allows the protagonist to achieve his or her goal or resolve their conflict.",
        c: "The character or force that prevents the protagonist from achieving his or her goal or resolving their conflict.",
        d: "The force that prevents the protagonist from achieving his or her goal or resolving their conflict."
      },
      correctAnswer: "c"
    },
    {
      question: "Which are static? Primary or Secondary characters?",
      answers: {
        a: "Primary",
        b: "Secondary"
      },
      correctAnswer: "b"
    },
    {
      question: "What does STEAL stand for?",
      answers: {
        a: "STEALing",
        b: "Speech, Thoughts, Effects on Others, Actions, and Looks",
        c: "Speech, Effects on Others, Thoughts, Actions, and Looks",
        d: "Speech, Emotions, Thoughts, Actions, and Looks"
      },
      correctAnswer: "b"
    },
    {
      question: "What is the mood of 'The Raven'?",
      answers: {
        a: "Eerie",
        b: "Creepy",
        c: "Haunting",
        d: "Frustrated"
      },
      correctAnswer: "a"
    },
    {
      question: "Formula for symbolism:",
      answers: {
        a: "Intangibel + Tangibel = Simbol",
        b: "Tangible + Intangible = Symbol",
        c: "Symbol + Tangerine = Intangerine"
      },
      correctAnswer: "b"
    },
    {
      question: "What is situational irony?",
      answers: {
        a: "Something funny",
        b: "Something hilarious",
        c: "When you expect something, but the opposite happens",
        d: "When you dont expect something to happen, but it does"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is a simile?",
      answers: {
        a: "Thorns are like needles",
        b: "I like ice cream",
        c: "Books are like a portal into another world"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is a metaphor?",
      answers: {
        a: "It is cold",
        b: "Roses are red",
        c: "A blanket is a warm hug",
        d: "Studying is like torture"
      },
      correctAnswer: "c"
    },
    {
      question: "What are the four types of conflict?",
      answers: {
        a: "Person vs. Person, Person vs. Self, Person vs. World, Person vs. Society",
        b: "Person vs. Person, Person vs. Self, Person vs. Nature, Person vs. Society",
        c: "Person vs. Person, Person vs. Self, Person vs. the World",
        d: "Person vs. Person, Person vs. Self, Person vs. Society/Group"
      },
      correctAnswer: "b"
    },
    {
      question: "The different plot elements (in order) are...",
      answers: {
        a: "Inciting Incident, Climax, Exposition, Rising Action, Falling Action,Resolution",
        b: "Plot Mountain",
        c: "Exposition, Inciting Incident, Rising Action, Climax, Falling Action, Resolution",
        d: "Climax, Inciting Incident, Exposition, Falling Action, Rising Action, Resolution"
      },
      correctAnswer: "c"
    },
    {
      question: "What is theme?",
      answers: {
        a: "Theme is a broad, universal statement about humanity that the author conveys to the reader.",
        b: "Theme is a universal statement about life or humanity that the author conveys to the reader.",
        c: "Theme is a broad statement about life or humanity that the author conveys to the reader.",
        d: "Theme is a broad, universal statement about life or humanity that the author conveys to the reader."
      },
      correctAnswer: "d"
    },
    {
      question: "How many theme rules are there?",
      answers: {
        a: "1",
        b: "2",
        c: "6 10/10",
        d: "7.5",
        e: "6.9",
        f: "18 1/2",
        g: "100.3"
      },
      correctAnswer: "c"
    },
    {
      question: "Who is the antagonist in 'Charles'?",
      answers: {
        a: "Laurie's Mom",
        b: "Laurie",
        c: "Charle's Mom",
        d: "Laurie's Dad",
        e: "The guy who made them exercise"
      },
      correctAnswer: "b"
    },
    {
      question: "Who is the antagonist in 'The Lottery'?",
      answers: {
        a: "Society",
        b: "The Town",
        c: "Mr Summers",
        d: "The Black Box"
      },
      correctAnswer: "a"
    },
    {
      question: "Who narrates 'The Raven'?",
      answers: {
        a: "The Raven",
        b: "Unnamed",
        c: "The Narrator"
      },
      correctAnswer: "b"
    },
    {
      question: "Which trait does the butterfly reveal about Eckels?",
      answers: {
        a: "His carelessness and recklessness",
        b: "His hilariousness",
        c: "It's irony",
        d: "It's an allusion to the butterfly effect"
      },
      correctAnswer: "a"
    },
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();