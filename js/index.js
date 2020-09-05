const div_typing = document.querySelector(".typing");
const textTable = [
  "Cześć, Jak tam?!",
  "Jak masz na imię? Był tu kiedyś Stanisław, spędziliśmy razem piękne chwile.",
  "Niestety musiał wyjechać za granicę do rodziny i już nie wrócił",
];
let letterIndex = 0;
let originalTime = 0;
let speed = 100; //czym większa wartość tym wolniejsza animacja  liter
let textIndex = 0;

div_typing.textContent = "";
const typing = (newTime) => {
  if (newTime - originalTime > speed) {
    //newtTime minus originaltime ma być większy niż prędkość

    if (letterIndex === textTable[textIndex].length - 1) {
      if (textIndex === textTable.length - 1) {
        //sprawdzamy czy czypadkiem, string który chcemy wyświetlić nie jest ostatnim w naszej tablicy
        //jeśli jest to zwracamy null i dalszy requestAnimation Frame nie jest już wywoływany
        //jest to zapezpieczenie przed błędem w konsoli
        return;
      }
      return setTimeout(() => {
        div_typing.textContent = ""; //czyści nam div typing
        letterIndex = 0; //czyści nam indeks wyświetlanej kolejnej litery do 0 z np drugiego stringa
        div_typing.textIndex = ""; //czyści nam indeks

        textIndex++;
        requestAnimationFrame(typing);
      }, 2000); //kolejny string zostanie wyświetlony po dwóch sekundach
    }
    originalTime = newTime;
    const letter = textTable[textIndex].substr(letterIndex, 1); //pobieramy litere zacznyjąc od indeksu 0, ile znaków? : 1
    div_typing.textContent = div_typing.textContent + letter; //dodajemy do .typing litere o indeksie 0
    letterIndex++;
  }

  requestAnimationFrame(typing); //wpisze nam cały string z text1
};

typing();
