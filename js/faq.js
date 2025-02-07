document.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelectorAll(".faq-questions");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            let answer = this.nextElementSibling; // Get the next div (the answer)
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});