const dark= document.querySelector("#dark");
const darkmode= document.querySelector(".darkmode");
const startdark = document.querySelector(".startdark");
const mainpage= document.querySelector("#mainpage");
const input2 = document.querySelector(".input2");
const normal= document.querySelector(".normal");

dark.addEventListener("click",()=>{
    dark.classList.toggle("darkmode");
    dark.classList.toggle("startdark");
    mainpage.classList.toggle("input2");

})
//darkmode.addEventListener("click",()=>{
  //  dark.classList.toggle("darkmode");
   // dark.classList.toggle("startdark");
   // mainpage.classList.toggle("input2");

//})