/* FUNCTION TO VISIBLE AND HIDDEN A DROPDOWN LIST IN HEADER (PART PAGES) */
const drop_down= document.querySelector(".drop_down");
const toggleDrop = document.getElementById("toggleDrop")
function hiddenDrop(){
   
    drop_down.classList.toggle("hidden");
    if(drop_down.classList.contains("hidden")){
        console.log("the drop is now hidden  ");
    }else{
        console.log("drop now is visible");
    }
}
toggleDrop.addEventListener("click",hiddenDrop);

/* FUNCTION TO SCROLL BOTTOM IN ABOUT PAGE =>SCROLLING FROM ABOUT US TO MASTER CHEFS */
function scrollIntoBottom(){
    console.log("function called");
    const nextPage = document.getElementById("resto_members");
    if(nextPage){
        nextPage.scrollIntoView({
            behavior:"smooth",
            block:"start",
        });
    }
    else{
        console.log("function doesn't work");
    }
}



/* FUNCTION TO SWITCH BETWEEN FOOD TIME ( BREAKFAST-LUNCH-DINNER)*/

 

const food_time = document.querySelectorAll(".food_time  .time");
function foodTimeSwitch(){
 food_time.forEach((food)=>{
   food.addEventListener("click", (nomove)=>{
    nomove.preventDefault();
    food_time.forEach((item) => item.classList.remove("active_time"));

    food.classList.add("active_time");
   });
});

  console.log("function called");
}
foodTimeSwitch();



/* FUNCTION TO SWITCH INTO OTHER MENU TIME FOOD  */
function switchMenu(){
    console.log("function called");
    const nextmenu = document.querySelectorAll(".time ");
       
           nextmenu.forEach((next) => {


        next.scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
    });
   
}
switchMenu();


  /*TWO FUNCTIONS TO SCROLL THE TESTIMONIAL TO LEFT & RIGHT AND CHANGE COLOR OF THE ACTIVE CARDS */
  /*change testimonial active card color  */
let activeCard=1;
const cards= document.querySelectorAll(".cards");
function cardColor(){
  cards.forEach((cards ,index) => {
    if (index=== activeCard) {
        cards.classList.add("center")
    }else{
        cards.classList.remove("center");
    }
  });
}

/* scrolling to right */
function scrollRight() {
    const container = document.getElementById("client_cards");
    if(activeCard<cards.length-1){
        activeCard++;
    }
    container.scrollBy({
        left: 450,
        behavior: "smooth"
    });

    cardColor();
}
/* scrolling to left */
function scrollToLeft(){
    const container =document.getElementById("client_cards");
    if(activeCard>0){
        activeCard--;
    }
    container.scrollBy({
        left: -450,
        behavior:"smooth"
    }); 

    cardColor();
}

cardColor();


