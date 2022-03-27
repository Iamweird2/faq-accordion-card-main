let question = document.querySelectorAll(".question-box");

let box = document.querySelector(".woman-picture-desktop-box");

let answer = document.querySelectorAll(".answer")

let questionContainer = document.querySelectorAll(".question-container")

for (let i = 0; i < question.length; i++) {
    let element = question[i];
   
    element.addEventListener("click", () => {
        
        answer.forEach( (each) => {
            each.classList.remove("answer-active");
        })  


        questionContainer.forEach( (each) => {
            each.classList.remove("question-head-active");  
        })

        element.firstChild.parentNode.childNodes[1].classList.add("question-head-active");
        element.lastChild.previousSibling.classList.toggle("answer-active");
    })
    element.addEventListener("mouseover", () => {
        box.classList.toggle("woman-picture-desktop-box-active");
    })
} 
