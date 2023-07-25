
const formMy = document.querySelector(".formMy");
const userL = document.getElementById("userL");
const passL = document.getElementById("passL");
let arr = [];
arr = JSON.parse(localStorage.getItem("Data"));

let result;
console.log("yoxla");
formMy.addEventListener("submit", function (e)  {
  e.preventDefault();
  console.log("done");

  for (let i = 0; i < arr.length; i++) {
   console.log("arr deyer",arr[i].name);
   console.log("input deyer" ,userL.value); 
    result = userL.value === arr[i].name && passL.value === arr[i].pass;
    
  }


  if (result) {
    alert('welcome to demo')
    signInWindow.classList.remove("view");
    mainHeroSection.classList.remove("myOpacity");
    header.classList.remove("myOpacity");
    signUp.style.display ="none";
  
  } else{
     alert("User not found");
   }
});


