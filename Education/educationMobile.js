console.log("script loaded")

  /* FUNCTION TO HIDDEN AND VISIBLE NAVBAR IN MOBILE VERSION */
  const BarEffect=document.getElementById("bar_effect");
  const BarIcon =document.querySelector(".bars_icon");
  const XmarkIcon =document.querySelector(".Xmark_icon");
  
  function showMobileNavBar(){
      console.log("nav bar visible");
      BarEffect.style.display="block";
  }
  function MobileNavBarHide(){
     console.log("nav bar hide");
     BarEffect.style.display="none";
  }
   BarIcon.addEventListener("click" ,showMobileNavBar);
   XmarkIcon.addEventListener("click" ,MobileNavBarHide);


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



