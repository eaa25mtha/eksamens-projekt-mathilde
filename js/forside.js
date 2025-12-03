"use strict";

//DOM CONTENT LOAD
document.addEventListener("DOMContentLoaded", () => {

 /*----------
 VARIABLER
 -----------*/
 const akvariemanden = document.querySelector(".akvariemanden");
 const skattekisteBtn = document.querySelector(".skattekiste-btn");


 /*----------------------------------------- 
 SKATTEKISTE BUTTON SOM FØRER TIL AKVARIET
 ------------------------------------------*/
  skattekisteBtn.addEventListener("click", () => {
    window.location.href = "akvarie.html";                   //window.location.href bruges til at skifte siden
  });


 /*-------------------------------------------
 AKVARIEMANDENS AUDIOOBJEKT OG EVENT LISTENER
 ---------------------------------------------*/
 const soundAkvariemanden = new Audio();
 soundAkvariemanden.src = "audio/akvariemanden.mp3";


 if (akvariemanden) {
  akvariemanden.addEventListener("click", () => {
    soundAkvariemanden.play();
  });
 }


}); //dom content load slut 
