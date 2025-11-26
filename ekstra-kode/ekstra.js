
/*------------------------------------
DATA OBJEKT, ARRAY TIL FISKENE
--------------------------------------*/
const fiskInfo = [
  {className: "klovnfisk", farve: "orange", alder: 5 },

  {className: "mini-klovnfisk", farve: "orange", alder: 1 },

  {className: "laks", farve: "lyserød", alder: 2 },

  {className: "blue-fisk", farve: "blå", alder: 1 },

  {className: "lilla-fisk", farve: "lilla", alder: 7 },

  {className: "stribet-fisk", farve: "blå og lyserød", alder: "10"},
];


/*-----------------------------
VIDENSBOKS FUNKTION
-------------------------------*/
const vidensboks = document.getElementById("vidensboks");

  function showVidensboks(html) {
    if (vidensboks) {
      vidensboks.innerHTML = html; //indsætter teksten fra objekterne i html

      vidensboks.classList.add("is-visible"); //gør boksen synlig med css

      setTimeout(function () {
        vidensboks.classList.remove("is-visible"); //bestemmer hvor længe boksen skal være synlig
      }, 3000);
    }
  }

  
/*------------------
FOR EACH FUNKTION
--------------------*/
  
  fiskInfo.forEach((fisk) => {
    //tager fat i alt der har med fiskene at gøre i html'en og loop'er det
    document.querySelectorAll("." + fisk.className).forEach((elem) => {
      elem.addEventListener("click", () => {
        const fiskDetails = `
            <strong> ${fisk.className}</strong> <br>
            farve: ${fisk.farve}<br>
            alder: ${fisk.alder}<br>
            `;

        showVidensboks(fiskDetails); //funktionen showVidensboks bliver kaldt, med variablen fiskDetails (med html) i
      });
    });
  });