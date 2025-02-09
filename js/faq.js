document.addEventListener("DOMContentLoaded", function () {
    var questions = document.querySelectorAll(".faq-questions");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            var answer = this.nextElementSibling; // Get the next div (the answer)
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});