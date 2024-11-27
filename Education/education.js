document.addEventListener("DOMContentLoaded", function () {
    const toggleDrops = document.querySelectorAll(".toggle_drop");

    toggleDrops.forEach(function (toggleDrop) {
        const dropDown = toggleDrop.closest('.drop_down').querySelector('.lesson_p');

        toggleDrop.addEventListener("click", function () {
            dropDown.classList.toggle("hidden");
        });
    });
});



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




function QiuzAnswers() {
    const Answers = document.querySelectorAll("input[type='radio']:checked");
    const CorrectAnswer = ["answer2_1", "answer4_2", "answer1_3", "answer3_4" , "answer2_5" , "answer1_6" ,"answer2_7" ,
        "answer1_8","answer2_9", "answer4_10"
     ];

    let score = 0;

    Answers.forEach(function (answer) {

     for(let i=0 ; i<CorrectAnswer.length ; i++){
        if(answer.id==CorrectAnswer[i]){
            score++;
        }
     }

    });
 

   
    document.getElementById("quizResult").textContent = ` Your result is :  ${score}/10 ` ;
   
 
   }
   document.getElementById("submit_quiz").addEventListener("click" , QiuzAnswers);


   const hideResult =document.querySelector(".hide_result");
   const quiz_btn =document.getElementById("submit_quiz");

   
     quiz_btn.addEventListener("click", function () {
        hideResult.classList.toggle("hide");
    });