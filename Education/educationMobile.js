//courses category drop-down list for mobile version
function HideCategories(){
    const ChoseCategory =document.getElementById("chose_category");
    const DropCategory = document.querySelector(".drop_category");
  
    ChoseCategory.addEventListener("click" ,function(event){
        event.preventDefault();
        console.log("clicked");
        DropCategory.classList.toggle("hide_category")
    });
}
HideCategories();