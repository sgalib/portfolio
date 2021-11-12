
$('.pre-loader').fadeOut(5000);
// THEME BUTTON TOGGLE

const thmTag = document.querySelector(".thm-tags");
const thmColors = document.querySelector(".thm-colors");
const thmIcon = document.querySelector(".thm-tags ion-icon");


thmTag.addEventListener("click",function(){
    thmColors.classList.toggle("thmExtend");
    
})
// MOOD ICON
const mdSearch = document.querySelector(".mdcon.search");
const sch = document.querySelector(".sch");

mdSearch.addEventListener("click",function(){
    this.classList.add("mdconjs");
    sch.classList.add("mdconInp");
})
//NAVBAR TOGGLER
const nvToggler = document.querySelector(".nav-toggler .icon");
const navBar = document.querySelector(".navbar");
const navClose = document.querySelector(".navbar .close");


nvToggler.addEventListener("click",function(){
    navBar.classList.add("nvExpand");
})
navClose.addEventListener("click",function(){
    navBar.classList.remove("nvExpand");
})




// THEME CHANGER
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const violet = document.querySelector(".violet");

// pink mode--
pink.addEventListener("click",function(){
    document.body.classList.add("pinkMode");
    document.body.classList.remove("greenMode");
    document.body.classList.remove("blueMode");
    document.body.classList.remove("violetMode");
})
//green mode--
green.addEventListener("click",function(){
    document.body.classList.add("greenMode");
    document.body.classList.remove("pinkMode");
    document.body.classList.remove("blueMode");
    document.body.classList.remove("violetMode");

})
//blue mode--
blue.addEventListener("click",function(){
    document.body.classList.add("blueMode")
    document.body.classList.remove("pinkMode");
    document.body.classList.remove("greenMode");
    document.body.classList.remove("violetMode");
})
//violet mode--
violet.addEventListener("click",function(){
    document.body.classList.add("violetMode");
    document.body.classList.remove("pinkMode");
    document.body.classList.remove("greenMode");
    document.body.classList.remove("blueMode");
})
//DARK mode--
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const inner = document.querySelector(".indark");
sun.addEventListener("click",function(){
    
    document.body.classList.add("darkMode");
    document.body.classList.remove("violetMode");
    document.body.classList.remove("pinkMode");
    document.body.classList.remove("greenMode");
    document.body.classList.remove("blueMode");
  
    sun.classList.add("visnone");
    moon.classList.add("visible");
    inner.classList.add("mtl");

     
})
moon.addEventListener("click",function(){
    
    // document.body.classList.add("ligh");
    document.body.classList.remove("violetMode");
    document.body.classList.remove("pinkMode");
    document.body.classList.remove("greenMode");
    document.body.classList.remove("blueMode");
    document.body.classList.remove("darkMode");
    sun.classList.remove("visnone");
    moon.classList.remove("visible");
    inner.classList.remove("mtl");
     
})
   // SLICK SLIDER
$(document).ready(function () {
    $('.testi').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      
      });



      //preloader
      
      
});
 
 
    
 