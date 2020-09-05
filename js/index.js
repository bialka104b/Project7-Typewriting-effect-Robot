const div_typing = document.querySelector(".typing");
const textTable = [
  "Cześć, Jak tam?!",
  "^Jak masz na imię? ^Był tu kiedyś Stanisław, spędziliśmy razem piękne chwile.",
  "Niestety musiał wyjechać za granicę do rodziny.^I już nie wrócił....",
];
let letterIndex = 0;
let originalTime = 0;
const speed = 100; //czym większa wartość tym wolniejsza animacja  liter
let textIndex = 0;
let textP_inDivTyping = div_typing;

div_typing.textContent = "";
const typing = (newTime) => {
  if (newTime - originalTime > speed) {
    //newtTime minus originaltime ma być większy niż prędkość
    const letter = textTable[textIndex].substr(letterIndex, 1); //pobieramy litere zacznyjąc od indeksu 0, ile znaków? : 1
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
    } else if (letterIndex === 0 || letter === "^") {
      // letter === "^"oznacza że jeśli pojawi sie znak ^ to tworzymy nowe p z tekstem który jest po nim
      const p = document.createElement("p"); //tworzymy tag p
      div_typing.appendChild(p); //dodajemy go do tagu div.typing
      textP_inDivTyping = p; //przypisujemy zmiennej wartość tekstu p
    }

    if (!(letter === "^")) {
      //jeśli nie występuje znak daszka^ to wykonaj
      textP_inDivTyping.textContent = textP_inDivTyping.textContent + letter; //dodajemy do div.typing>p  litere o indeksie 0
    }
    originalTime = newTime;
    letterIndex++;
  }

  requestAnimationFrame(typing); //wpisze nam cały string z text1
};

typing();
