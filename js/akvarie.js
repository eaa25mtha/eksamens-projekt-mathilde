"use strict";

//DOM CONTENT LOAD 
document.addEventListener("DOMContentLoaded", () => {


 /*---------------------------------
 HENT FISKENE FRA HTML MED DOM
 -----------------------------------*/
  //henter alle fiskene der skal bruges fra html ved at kalde en const variabel
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
  soundPinkFisk.src = "audio/cykel.mp3";

  const soundBlueFisk = new Audio();
  soundBlueFisk.src = "audio/bobler.mp3";

  const soundLillaFisk = new Audio();
  soundLillaFisk.src = "audio/bobler.mp3";

  const soundMiniKlovnfisk = new Audio();
  soundMiniKlovnfisk.src = "audio/bobler.mp3";



 /*--------------------------------
 EVENTLISTENERS PÅ AUDIO OBJEKTERNE
 ----------------------------------*/
  //klovnfisken
  if (klovnfisk) {
    klovnfisk.addEventListener("click", () => {
      soundKlovnfisk.play();
    });
  }

  //laksen
  if (laks) {
    laks.addEventListener("click", () => {
      soundLaks.play();
    });
  }

  //den pink fisk
  if (pinkFisk) {
    pinkFisk.addEventListener("click", () => {
      soundPinkFisk.play();
    });
  }

  //den blå fisk
  if (blueFisk) {
    blueFisk.addEventListener("click", () => {
      soundBlueFisk.play();
    });
  }

  //den lilla fisk
  if (lillaFisk) {
    lillaFisk.addEventListener("click", () => {
      soundLillaFisk.play();
    });
  }

  //mini klovnfisken
  if (miniKlovnfisk) {
    miniKlovnfisk.addEventListener("click", () => {
      soundMiniKlovnfisk.play();
    });
  }


 /*--------------------
 TILBAGE KNAP EVENT
 ---------------------*/   
  const tilbageBtn = document.querySelector(".tilbagebtn");

  if(tilbageBtn) {
    tilbageBtn.addEventListener("click", () => {
        window.location.href = "index.html"
    });
  }


 /*-------------------
 CYKEL DRAG AND DROP
 ---------------------*/
 






}); //DOM content loaded, slut
