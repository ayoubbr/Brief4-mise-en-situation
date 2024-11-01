const questions = [];
var counter = 0;
const counter_number = document.getElementById("counter-number");


const question_label = document.getElementsByClassName('question-label');
const answer_label = document.getElementsByClassName('answer-label');

for (var i = 0; i < questions.length; i++) {
    question_label[i].innerText = questions[i].question;
    answer_label[i].innerText = questions[i].answer;
}


const add_question = document.getElementById('add-question');

add_question.addEventListener("click", addQuestion);
const question_name = document.getElementById("question-name");
const answer_name = document.getElementById("answer-name");


const accordionExample = document.getElementById("accordionExample");


function addQuestion() {

    questions.push({ question: question_name.value, answer: answer_name.value });
    counter++;
    counter_number.innerText = counter;

    accordionExample.appendChild(document.createElement("div")).classList.add("accordion-item");
    const elements = document.getElementsByClassName("accordion-item");

    question_name.value = "";
    answer_name.value = "";

    for (let index = 0; index < questions.length; index++) {
        elements[index].innerHTML = `
             <h2 class="accordion-header">
                 <button class="accordion-button question-label" type="button" data-bs-toggle="collapse"
                     data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                     ${questions[index].question}
                 </button>
             </h2>
             <div id="collapse${index}" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                 <div class="accordion-body answer-label">
                     <strong>${questions[index].answer}</strong> 
                 </div>
             </div>`;
    }
}




