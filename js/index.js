const div_typing = document.querySelector(".typing");
const text1 = "Cześć, Jak tam?!";
let letterIndex = 0;

const typing = () => {
    const letter = text1.substr(letterIndex, 1);//pobieramy liteye zacznyjąc od indeksu 0, ile znaków? : 1
    console.log(letter);
    div_typing.textContent = div_typing.textContent + letter;//dodajemy do .typing litere o indeksie 0
    letterIndex++;
}

typing();