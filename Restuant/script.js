
function scrollRight() {
    const container = document.getElementById("client_cards");
    container.scrollBy({
        left: 450,
        behavior: "smooth"
    });
}
function scrollToLeft(){
    const container =document.getElementById("client_cards");
    container.scrollBy({
        left: -450,
        behavior:"smooth"
    }); 
}


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