"use strict";

//DOM CONTENT LOAD 
document.addEventListener("DOMContentLoaded", () => {


 /*---------------------------------
 VARIABLER 
 -----------------------------------*/
  const klovnfisk = document.querySelector(".klovnfisk");
  const laks = document.querySelector(".laks");
  const pinkFisk = document.querySelector(".pink-fisk");
  const greenFisk = document.querySelector(".green-fisk");
  const lillaFisk = document.querySelector(".lilla-fisk");
  const krabbe = document.querySelector(".krabbe");


 /*-------------------------
 AUDIO OBJEKTER TIL FISKENE
 ---------------------------*/
  const soundKlovnfisk = new Audio();
  soundKlovnfisk.src = "audio/klovnfisk.mp3";

  const soundLaks = new Audio();
  soundLaks.src = "audio/bobler.mp3";

  const soundPinkFisk = new Audio();
  soundPinkFisk.src = "audio/nys.mp3";

  const soundGreenFisk = new Audio();
  soundGreenFisk.src = "audio/burp.mp3";

  const soundLillaFisk = new Audio();
  soundLillaFisk.src = "audio/bobler.mp3";




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


  if (greenFisk) {
    greenFisk.addEventListener("click", () => {
      soundGreenFisk.play();
    });
  }


  if (lillaFisk) {
    lillaFisk.addEventListener("click", () => {
      soundLillaFisk.play();
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
  TOGGLE EFFEKTER 
  ---------------*/
  //krabbe
  if(krabbe) {                                             //tjekker om krabbe variablen findes
    krabbe.addEventListener("click", () => {               //event listener på om der klikkes på krabben
      krabbe.classList.add("blink");                       //css classlist property bruges til at tilføje blinke billedet
 
      setTimeout(() => {                                   //time out funktion der fjerner billedet igen efter 500ms, med classlist remove
      krabbe.classList.remove("blink");
      }, 500);
    });
  }


  //pink fisk 
  if(pinkFisk) {
    pinkFisk.addEventListener("click", () => {
      pinkFisk.classList.add("nys");

      setTimeout(() => {
      pinkFisk.classList.remove("nys");
      }, 1200);
    });
  }

  
 //green fisk 
  if(greenFisk) {
    greenFisk.addEventListener("click", () => {
      greenFisk.classList.add("burp");

      setTimeout(() => {
        greenFisk.classList.remove("burp");
      }, 900);
    });
  }




}); //DOM content loaded, slut
