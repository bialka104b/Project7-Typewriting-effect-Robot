const div_typing = document.querySelector(".typing");
const text1 = "Cześć, Jak tam?!";
let letterIndex = 0;
let originalTime = 0;
let speed = 200; //czym większa wartość tym wolniejsza animacja  liter

div_typing.textContent = "";
const typing = (newTime) => {
  if (newTime - originalTime > speed) {
    //newtTime minus originaltime ma być większy niż prędkość
    originalTime = newTime;
    const letter = text1.substr(letterIndex, 1); //pobieramy liteye zacznyjąc od indeksu 0, ile znaków? : 1
    div_typing.textContent = div_typing.textContent + letter; //dodajemy do .typing litere o indeksie 0
    letterIndex++;
  }

  requestAnimationFrame(typing); //wpisze nam cały string z text1
};

typing();
