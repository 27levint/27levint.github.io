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
      question: "Translate to French: How old are you?",
      answers: {
        a: "Quel âge es tu",
        b: "Quel âge as tu",
        c: "Qual age es tu",
        d: "Age qual as tu"
      },
      correctAnswer: "b"
    },
    {
      question: "Translate to French: Their grandparents are going to the store.",
      answers: {
        a: "Leurs grand-parents vont au.",
        b: "Leurs grand-parents von au magasin.",
        c: "Leurs grand-parents vont au magasin.",
        d: "Leur grand-parents vont au magasin."
      },
      correctAnswer: "c"
    },
    {
      question: "Translate to French: He played soccer at the park.",
      answers: {
        a: "Il a joué au foot au parc",
        b: "Il a joué au fot au parc"
      },
      correctAnswer: "a"
    },
    {
      question: "Translate to French: He is going to sleep in the house.",
      answers: {
        a: "Il va dormí à la maison.",
        b: "Il va dormir la maison.",
        c: "Ill va dormir à el maison.",
        d: "Il va dormir à la maison."
      },
      correctAnswer: "d"
    },
    {
      question: "Translate to French: I hate studying but I have to.",
      answers: {
        a: "Je déteste étudier mais je dois.",
        b: "Je déteste étudiar mais je dois.",
        c: "Je déteste étudio mais je dois.",
        d: "Je deteste étudier mais je dois."
      },
      correctAnswer: "a"
    },
    {
      question: "Translate to French: I love playing video games so I played video games.",
      answers: {
        a: "Jadore jouer aux jeux video, donc, jai joue aux jeux video.",
        b: "J'adore jouer aux jeux vidéo, donc, j'ai joué aux jeux vidéo.",
        c: "J'adore jouer aux jeu vidéo, donc, j'ai joué aux jeu vidéo."
      },
      correctAnswer: "b"
    },
    {
      question: "Translate to French: My name is Paul and I like sleeping.",
      answers: {
        a: "Je m'appelle paul, es j'aime dormir.",
        b: "Je mappelle Paul, et j'aime dormir.",
        c: "Je m'appelle Paul, et j'aime dormir.",
        d: "Je m'appelle Paul, es j'aime dormer."
      },
      correctAnswer: "c"
    },
    {
      question: "Translate to French: He is hard-working, happy, and nice.",
      answers: {
        a: "Il est travailleur, content, et sympa.",
        b: "Il est traveleer, content, et sympa.",
        c: "Il est travailleur, contento, et sympia."
      },
      correctAnswer: "a"
    },
    {
      question: "Translate to French: He can go to the cinema.",
      answers: {
        a: "Il peut allier au cinema",
        b: "Il put aller au cinéma",
        c: "Ill peut aller au cinéma",
        d: "Il peut aller au cinéma"
      },
      correctAnswer: "d"
    },
    {
      question: "Translate to French: He has to do the dishes.",
      answers: {
        a: "Il doit fair la vaisele.",
        b: "Il doit faire la vaisselle.",
        c: "Il do faire la vaisselle.",
        d: "Il doit faire el vaisselle."
      },
      correctAnswer: "b"
    },
    {
      question: "Translate to French: I am 12 years old.",
      answers: {
        a: "J'ai douze ans.",
        b: "Jai douze ans.",
        c: "J'ai douce ans.",
        d: "J'ai doce años."
      },
      correctAnswer: "a"
    },
    {
      question: "Translate to French: 55",
      answers: {
        a: "Cinquante-cinco",
        b: "Cincuante-cinq",
        c: "Cincuenta y cinco",
        d: "Cinquante-cinq"
      },
      correctAnswer: "d"
    },
    {
      question: "Translate to French: How are you?",
      answers: {
        a: "Comment allez-yous?",
        b: "Comet allez-vous?",
        c: "Coment allez-vous?",
        d: "Comment alez-vous?",
        e: "Comment alles-vous?",
        f: "Comment allez-vous?",
        g: "Comment allez-vou?"
      },
      correctAnswer: "f"
    },
    {
      question: "Translate to French: Why?",
      answers: {
        a: "Porqui",
        b: "Porquoi",
        c: "Porque",
        d: "Pork",
        e: "Porqoiu"
      },
      correctAnswer: "b"
    },
    {
      question: "Translate to French: I don't know",
      answers: {
        a: "Je ne sais pais.",
        b: "Je ne said pas.",
        c: "Je ne sais pas.",
        d: "Je ne say pas."
      },
      correctAnswer: "c"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();