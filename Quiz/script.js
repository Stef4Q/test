const options = ["football", "tennis", "biking", "cricket", "basketball", "badminton", "athletics", "table tennis", "volleyball", "MX", "reading", "watching movies"];
const questions1 = ["How much do you like "];
const questions2 = ["How much do you play"];
const questions3 = ["How long have you played or done "];

const answers1 = ["Favourite","A lot","Occasionally","A bit","Not at all"];
const answers2 = ["Wish I always did","Whenever I can","Weekly","Occasionally","From time to time"];

const picked= [];
const strengths = [];
const hobbies = [];
let no_of_hobbies = 10;
const highStrengths = [];
const highHobbies = [];

const strengths1 = [];


while(hobbies.length < no_of_hobbies)   // as long as the list of hobbies has less than no_of_hobbies elements
{
	var j = Math.floor(Math.random() * (options.length));    // generate an index j (from options)
  if (!hobbies.includes(options[j]))    // check if that option was already selected
  {
    hobbies.push(options[j]);     // if we did not previusly add this hobby to our list, add it now
  }
}

console.log(hobbies);

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

loadQuiz(questions1,answers1,hobbies,currentQuiz)


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === "a") {
      strengths.splice(strengths.length,0,'7');

    } else if (answer === "b") {
      strengths.splice(strengths.length,0,'5');
    }
    else if (answer === "c") {
      strengths.splice(strengths.length,0,'4');
    } else if (answer === "d") {
      strengths.splice(strengths.length,0,'3');
    } else if (answer === "e"){
      strengths.splice(strengths.length,0,'2');
    }

    currentQuiz++

    if (currentQuiz < no_of_hobbies) {
      loadQuiz(questions1,answers1,hobbies,currentQuiz)
    } else {
      quiz.innerHTML = `
             <h2>You answered questions boss</h2>

             <button onclick="location.reload()">Reload</button>
             `
      bubbleSort(strengths, hobbies);
      console.log(strengths);
      console.log(hobbies);
      linearSearch(strengths, "4");
      testt();
      console.log(highStrengths);
      console.log(highHobbies);

    }
  } 
  else // if the user has not selected an answer, prompt them to pick one
  {
    alert("Please pick an option!");
  }

})







function testt(){

let currentQuiz1 = 0;

loadQuiz(questions2,answers2,highHobbies,currentQuiz1)

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
    if (answer === "a") {
      strengths1.splice(strengths1.length,0,'3');

    } else if (answer === "b") {
      strengths1.splice(strengths1.length,0,'2');
    }
    else if (answer === "c") {
      strengths1.splice(strengths1.length,0,'1');
    } else if (answer === "d") {
      strengths1.splice(strengths1.length,0,'1');
    } else if (answer === "e"){
      strengths1.splice(strengths1.length,0,'0');
    }

    currentQuiz1++

    if (currentQuiz1 < highHobbies.length) {
      loadQuiz(questions2,answers2,highHobbies,currentQuiz1)
    } else {
      quiz.innerHTML = `
             <h2>You answered questions boss</h2>

             <button onclick="location.reload()">Reload</button>

             `
      bubbleSort(highHobbies, strengths1);
      console.log(strengths1);
      console.log(highHobbies);


    }
  } 
  else // if the user has not selected an answer, prompt them to pick one
  {
    alert("Please pick an option!");
  }

})
}

function loadQuiz(ques,ans,array3,pointer) {

  deselectAnswers()

  questionEl.innerText = ques + array3[pointer] + "?"
  a_text.innerText = ans[0]
  b_text.innerText = ans[1]
  c_text.innerText = ans[2]
  d_text.innerText = ans[3]
  e_text.innerText = ans[4]

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



function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > key){
            highStrengths.push(arr[i]);
            highHobbies.push(hobbies[i]);
        }
    }
    return -1
}
