"use strict";

//DOM CONTENT LOAD 
document.addEventListener("DOMContentLoaded", () => {


 /*---------------------------------
 VARIABLER 
 -----------------------------------*/
  const klovnfisk = document.querySelector(".klovnfisk");
  const laks = document.querySelector(".laks");
  const pinkFisk = document.querySelector(".pink-fisk");
  const blueFisk = document.querySelector(".blue-fisk");
  const lillaFisk = document.querySelector(".lilla-fisk");
  const miniKlovnfisk = document.querySelector(".mini-klovnfisk");


 /*-------------------------
 AUDIO OBJEKTER TIL FISKENE
 ---------------------------*/
  const soundKlovnfisk = new Audio();
  soundKlovnfisk.src = "audio/klovnfisk.mp3";

  const soundLaks = new Audio();
  soundLaks.src = "audio/bobler.mp3";

  const soundPinkFisk = new Audio();
  soundPinkFisk.src = "audio/bobler.mp3";

  const soundBlueFisk = new Audio();
  soundBlueFisk.src = "audio/bobler.mp3";

  const soundLillaFisk = new Audio();
  soundLillaFisk.src = "audio/bobler.mp3";

  const soundMiniKlovnfisk = new Audio();
  soundMiniKlovnfisk.src = "audio/bobler.mp3";



 /*--------------------------------
 EVENTLISTENERS PÅ AUDIO OBJEKTERNE
 ----------------------------------*/
  if (klovnfisk) {
    klovnfisk.addEventListener("click", () => {
      soundKlovnfisk.play();
    });
  }


  if (laks) {
    laks.addEventListener("click", () => {
      soundLaks.play();
    });
  }


  if (pinkFisk) {
    pinkFisk.addEventListener("click", () => {
      soundPinkFisk.play();
    });
  }


  if (blueFisk) {
    blueFisk.addEventListener("click", () => {
      soundBlueFisk.play();
    });
  }


  if (lillaFisk) {
    lillaFisk.addEventListener("click", () => {
      soundLillaFisk.play();
    });
  }

 
  if (miniKlovnfisk) {
    miniKlovnfisk.addEventListener("click", () => {
      soundMiniKlovnfisk.play();
    });
  }


 /*--------------------
 TILBAGE PIL OG SKATTEKISTE
 ---------------------*/   
  const pilBtn = document.querySelector(".pil-btn");
  const skattekisteBtn = document.querySelector(".skattekiste-btn");

  //tilbage funktion med både pilen og skattekisten kombineret
  if(pilBtn && skattekisteBtn) {
    pilBtn.addEventListener("click", () => {
        window.location.href = "index.html"
    });

    skattekisteBtn.addEventListener("click", () => {
      window.location.href = "index.html"
    });
  }




  /*-------------
  KRABBE TOGGLE
  ---------------*/
  const krabbe = document.querySelector(".krabbe");

  if(krabbe) {                                             //tjekker om krabbe variablen findes
    krabbe.addEventListener("click", () => {               //event listener på om der klikkes på krabben
      krabbe.classList.add("blink");                       //css classlist property bruges til at tilføje blinke billedet
 
      setTimeout(() => {                                   //time out funktion der fjerner billedet igen efter 500ms, med classlist remove
      krabbe.classList.remove("blink");
      }, 500);
    });
  }



}); //DOM content loaded, slut
