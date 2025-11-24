"use strict";

const purpleFish = document.querySelector(".purple-fish");

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const vidensButton = document.querySelector(".videns-akvarie");
  const findButton = document.querySelector(".find-fisken");
  const colorButton = document.querySelector(".color-fish");

  vidensButton.addEventListener("click", () => {
    window.location.href = "https://emiliavlh.github.io/akvarie-spil-et/";
  });

  findButton.addEventListener("click", () => {
    window.location.href = "https://emiliavlh.github.io/akavarie-spil-to/";
  });

  colorButton.addEventListener("click", () => {
    window.location.href = "https://emiliavlh.github.io/akvarie-spil-tre/";
  });
});
