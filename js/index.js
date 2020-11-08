const dropDown = document.querySelectorAll(".dropdown-arrow");
const faqQuestion = document.querySelectorAll(".question");
const faqAnswer = document.querySelectorAll(".answer");


dropDown.forEach(function(element) {
    element.addEventListener("click", () => {
        if (element.classList.contains("arrow-active")) {
            element.classList.remove("arrow-active");
            element.previousElementSibling.classList.remove("answer-active");
            element.previousElementSibling.previousElementSibling.classList.remove("active");

        } else {
            checkArrows(dropDown);
            checkAnswers(faqAnswer);
            checkQuestion(faqQuestion);
            element.classList.add("arrow-active");
            element.previousElementSibling.classList.add("answer-active");
            element.previousElementSibling.previousElementSibling.classList.add("active");
        }
    });
});

faqQuestion.forEach(function(element){
    element.addEventListener("click", () => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.nextElementSibling.classList.remove("answer-active");
            element.nextElementSibling.nextElementSibling.classList.remove("arrow-active");

        } else {
            checkArrows(dropDown);
            checkAnswers(faqAnswer);
            checkQuestion(faqQuestion);
            element.classList.add("active");
            element.nextElementSibling.classList.add("answer-active");
            element.nextElementSibling.nextElementSibling.classList.add("arrow-active");
        }
    });
});


function checkArrows(e) {
    for (let index = 0; index < e.length; index++) {
        e.item(index).classList.remove("arrow-active");  
    }
}

function checkAnswers(e) {
    for (let index = 0; index < e.length; index++) {
        e.item(index).classList.remove("answer-active");
    }
}

function checkQuestion(e) {
    for (let index = 0; index < e.length; index++) {
        e.item(index).classList.remove("active");
    }
}