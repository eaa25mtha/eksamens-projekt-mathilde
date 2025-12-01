"use strict";

//DOM CONTENT LOAD
document.addEventListener("DOMContentLoaded", () => {


 //AKVARIE KNAP - FØRER TIL SPILLET
  const skattekisteBtn = document.querySelector(".skattekiste-btn");

  skattekisteBtn.addEventListener("click", () => {
    window.location.href = "akvarie.html";
  });


 /*----------
 VARIABLER
 -----------*/
 const akvariemanden = document.querySelector(".akvariemanden");


 /*---------------
 AUDIO OBJEKTER
 ----------------*/
 const soundAkvariemanden = new Audio();
 soundAkvariemanden.src = "audio/akvariemanden.mp3";


 /*---------------
 EVENT LISTENERS
 -----------------*/
 if (akvariemanden) {
  akvariemanden.addEventListener("click", () => {
    soundAkvariemanden.play();
  });
 }







}); //dom content load slut 
