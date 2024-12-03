console.log("Script loaded");

function scrollIntoDetials() {
    console.log("function called");
    const nextPage = document.querySelector(".course_skills");
    if (nextPage) {
        nextPage.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
    else {
        console.log("function doesn't work");
    }
}
function scrollIntoTestImonial() {
    console.log("function called");
    const nextPage = document.querySelector(".course_testimonial");
    if (nextPage) {
        nextPage.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
    else {
        console.log("function doesn't work");
    }
}

//show and hide course lessons
document.addEventListener("DOMContentLoaded", function () {
    const toggleDrops = document.querySelectorAll(".toggle_drop");

    toggleDrops.forEach(function (toggleDrop) {
        const dropDown = toggleDrop.closest('.drop_down').querySelector('.lesson_p');


        toggleDrop.addEventListener("click", function () {
            console.log("Click detected!");
            dropDown.classList.toggle("hidden");

        });
    });
});


//Quiz function 
function QiuzAnswers() {
    const Answers = document.querySelectorAll("input[type='radio']:checked");
    const GradeElement = document.getElementById("grade")
    const CorrectAnswer = ["answer2_1", "answer4_2", "answer1_3", "answer3_4", "answer2_5", "answer1_6", "answer2_7",
        "answer1_8", "answer2_9", "answer4_10"
    ];
    
    let score = 0;
    
    Answers.forEach(function (answer) {
        
        for (let i = 0; i < CorrectAnswer.length; i++) {
            if (answer.id == CorrectAnswer[i]) {
                score++;
            }
        }
        
    });
    
    if (score < 5) {
        GradeElement.textContent = "try again";
        GradeElement.style.color = "red"
    }
    else if (score >= 6 && score <= 8) {
        GradeElement.textContent = "Good ";
        GradeElement.style.color = "orange"
    }
    else if (score > 8 && score <= 10) {
        GradeElement.textContent = "Good Job";
        GradeElement.style.color = "Green"
    }

    document.getElementById("quizResult").textContent = ` Your result is :  ${score}/10 `;
    
    
}
document.getElementById("submit_quiz").addEventListener("click", QiuzAnswers);

const grade_hidden = document.querySelector(".grade_hidden");
const hideResult = document.querySelector(".hide_result");
const quiz_btn = document.getElementById("submit_quiz");


quiz_btn.addEventListener("click", function () {
    hideResult.classList.toggle("show");
    grade_hidden.classList.toggle("show");
});































