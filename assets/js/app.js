const watchlist =document.querySelector(".watchlistP");
const xmark =document.querySelector("#delet");
const xmarkWatch =document.querySelector("#xmarkWatch");
const movies =document.querySelector(".movies");
const signInWindow =document.querySelector(".signInWindow");
const signIn =document.querySelector(".signIn");
const mainHeroSection =document.querySelector("#mainHeroSection");
const header = document.querySelector(".myHeader");



watchlist.addEventListener("click" , function () {
    movies.classList.add("opacity");
    xmarkWatch.addEventListener("click" ,function () {
        movies.classList.remove("opacity");
    });
   
   
});

signIn.addEventListener("click" , function () {
    signInWindow.classList.add("view");
    mainHeroSection.classList.add("myOpacity");
    header.classList.add("myOpacity")
    xmark.addEventListener("click" ,function () {
        signInWindow.classList.remove("view");
        mainHeroSection.classList.remove("myOpacity");
        header.classList.remove("myOpacity")
    });
   
});


