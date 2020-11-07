const dropDown = document.querySelectorAll(".dropdown-arrow");
const faqQuestion = document.querySelectorAll(".question");

console.log(dropDown);

dropDown.forEach(function(element) {
    element.addEventListener("click", () => {
        if (element.classList.contains("arrow-active")) {
            element.classList.remove("arrow-active");
            element.previousElementSibling.classList.remove("answer-active");
            element.previousElementSibling.previousElementSibling.classList.remove("active");

        } else {
            element.classList.add("arrow-active");
            element.previousElementSibling.classList.add("answer-active");
            element.previousElementSibling.previousElementSibling.classList.add("active");
        }
    });
});


faqQuestion.forEach(function(element) {
    element.addEventListener("click", () => {
        if (element.classList.contains("active")) {
            element.classList.remove("active");
            element.nextElementSibling.classList.remove("answer-active");
            element.nextElementSibling.nextElementSibling.classList.remove("arrow-active");

        } else {
            element.classList.add("active");
            element.nextElementSibling.classList.add("answer-active");
            element.nextElementSibling.nextElementSibling.classList.add("arrow-active");
        }
    });
});

