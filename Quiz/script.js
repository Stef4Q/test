const options = ["football", "tennis", "biking", "cricket", "basketball", "badminton", "athletics","table tennis","volleyball","MX"];
const picked= [];
let x;
const strengths = [];
const hobbies = [];



while(options.length>0)
{
	var j = Math.floor(Math.random() * (options.length));
  hobbies.push(options[j]);
  options.splice(j, 1); 
}

const quizData = [

  

  {
    question: "Do you like " + hobbies[0],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },
  {
    question: "Do you like " + hobbies[1],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },
  {
    question: "Do you play " + hobbies[2],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },
  {
    question: "Do you like " + hobbies[3],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },

 {
    question: "Do you like " + hobbies[4],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },

  {
    question: "Do you like " + hobbies[5],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },

  {
    question: "Do you like " + hobbies[6],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },
  {
    question: "Do you like " + hobbies[7],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },

  {
    question: "Do you like " + hobbies[8],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },

 {
    question: "Do you like " + hobbies[9],
    a: "Favourite",
    b: "A lot",
    c: "Occasionally",
    d: "A bit",
    e: "Never"

  },



];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')

const submitBtn = document.getElementById('submit')


let currentQuiz = 0

loadQuiz()

function loadQuiz() {

  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
  e_text.innerText = currentQuizData.e

}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}


function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}



submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === "a") {
      strengths.push("7");

    } else if (answer === "b") {
      strengths.push("6");
    }
    else if (answer === "c") {
      strengths.push("4");
    } else if (answer === "d") {
      strengths.push("3");
    } else if (answer === "e"){
      strengths.push("2");
    }
  }

  currentQuiz++

  if (currentQuiz < quizData.length) {
    loadQuiz()
  } else {
    quiz.innerHTML = `
           <h2>You answered questions boss</h2>

           <button onclick="location.reload()">Reload</button>

           `
    bubbleSort(strengths, hobbies);
    console.log(strengths);
    console.log(hobbies);
  }




})

function bubbleSort(array, array2) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        var tmp2 = array2[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
        array2[i - 1] = array2[i];
        array2[i] = tmp2;
      }
    }
  }

  return array;
}

