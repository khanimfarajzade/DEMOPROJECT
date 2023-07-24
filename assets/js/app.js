const watchlist = document.querySelector(".watchlistP");
const xmark = document.querySelector("#delet");
const xmarkL = document.querySelector("#delete");
const xmarkWatch = document.querySelector("#xmarkWatch");
const movies = document.querySelector(".movies");
const signInWindow = document.querySelector(".signInWindow");
const signIn = document.querySelector(".signIn");
const mainHeroSection = document.querySelector("#mainHeroSection");
const header = document.querySelector(".myHeader");

watchlist.addEventListener("click", function () {
  movies.classList.add("opacity");
  xmarkWatch.addEventListener("click", function () {
    movies.classList.remove("opacity");
  });
});

signIn.addEventListener("click", function () {
  signInWindow.classList.add("view");
  mainHeroSection.classList.add("myOpacity");
  header.classList.add("myOpacity");
  xmark.addEventListener("click", function () {
    signInWindow.classList.remove("view");
    mainHeroSection.classList.remove("myOpacity");
    header.classList.remove("myOpacity");
  });
});

// responsiv nav js
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  const leftMenu = document.querySelector(".leftMenu");
  leftMenu.classList.toggle("myDisplay");
});

const like = document.querySelectorAll(".like");
const dislike = document.querySelectorAll(".dislike");
const signUp = document.querySelector(".signUp");
console.log(like, "1");

for (let i = 0; i < like.length; i++) {
  console.log(" salam", i);
  like[i].addEventListener("click", function () {
    let deyer =true;
    signUp.classList.add("view");
    xmarkL.addEventListener("click" ,function () {
        deyer = false;
        like[i].classList.remove("red");
        signUp.classList.remove("view");
    });
    if(deyer) {
       
        like[i].classList.toggle("red");
        for (let j = 0; j < dislike.length; j++) {
            if (i===j) {
                dislike[j].addEventListener("click" ,function () {
                    like[i].classList.remove("red");
                })
            }
            
        } 
    }
    
  });
}


for (let i = 0; i < dislike.length; i++) {
    dislike[i].addEventListener("click", function () {
        let deyer =true;
    signUp.classList.add("view");
    xmarkL.addEventListener("click" ,function () {
        deyer = false;
        dislike[i].classList.remove("black");
        signUp.classList.remove("view");
    });
    if(deyer){
        dislike[i].classList.toggle("black");
        for (let j = 0; j < dislike.length; j++) {
            if (i===j) {
                like[j].addEventListener("click" ,function () {
                    dislike[i].classList.remove("black");
                })
            }
            
        }
    }
   
  });
}
