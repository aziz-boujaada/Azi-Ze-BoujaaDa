// hide and visible the list of pages 


const Drop_Down = document.getElementById("drop_down");
const Pages_List = document.querySelector(".list_pages");

Drop_Down.addEventListener('click', () => {

    Pages_List.classList.toggle("hide");

});

// visible SEARCH area 

const search_icon = document.querySelector(".search");
const search_Area = document.querySelector(".search_area");
const Xmark_icon = document.querySelector(".Xmark");

search_icon.addEventListener('click', () => {
    search_Area.classList.remove("hidden");
});

Xmark_icon.addEventListener('click', () => {
    search_Area.classList.add("hidden");
});


/*visible team players section when click on flag in the matches card section*/ 
const matches_Cards = document.querySelector(".matches_cards");
const flag_event = document.querySelectorAll(".flag_event");
const Xmark_player_team = document.getElementById("Xmark_player");
const player_team = document.querySelector(".team_player");


flag_event.forEach(flag_event => {
    flag_event.addEventListener('click', () => {
        player_team.classList.remove("visible-team");

        matches_Cards.style.opacity = "0";
        player_team.style.height = "110vh";

    });
});
Xmark_player_team.addEventListener('click', () => {
    player_team.classList.add("visible-team");
    matches_Cards.style.opacity = "1";
});

// visible players of each Position (GK, DF, MF, FW) 
const Positions= document.querySelectorAll(".Positions");
const player_list = document.querySelectorAll(".player_list");

Positions.forEach((Positions , index) =>{
   Positions.addEventListener('click' ,() =>{
       player_list.forEach(player_list => {
       
        player_list.classList.add("show_players");
       }); 
       if(player_list[index]){
           player_list[index].classList.remove("show_players");
       }
       
   });
});