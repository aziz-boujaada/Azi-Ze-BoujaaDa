
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