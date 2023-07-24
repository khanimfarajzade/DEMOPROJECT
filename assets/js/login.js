
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
   console.log("add",arr[i].name);
   console.log("nebilime" ,userL.value); 
    result = userL.value === arr[i].name && passL.value === arr[i].passL;
    
  }


  if (result) {
    signInWindow.classList.remove("view");
   // window.open('basket.html', '_blank');
  }
   //else if (userL.value === "admin" && passL.value === "admin1234") {
  // window.open('admin.html', '_blank');
  //     //alert("welcome to admin");
 //}
   else{
     alert("User not found");
   }
});


