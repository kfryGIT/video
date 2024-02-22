const btn=document.querySelector(".switch-btn");
const video=document.querySelector(".video-container");

btn.addEventListener("click", function(){
    //jeśli na przycisku nie ma kl. slider niebieskiej
    //dodaj ją i zatrzymaj video.....
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }else{
        btn.classList.remove("slide");
        video.play();
    }
});

//preloader
const preloader=document.querySelector(".preloader");

//load-ładowanie 
window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader");
});

