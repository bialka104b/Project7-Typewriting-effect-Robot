// const voice_bars = document.querySelector("#voice-bars");

const move_bars = () => {
  const timeline_bars = new TimelineMax({
    onComplete: move_bars,
  });
  const scale = () => {
    //losowanie rozmiaru
    return Math.random() * 1.5 + 0.5; //maksymalny wynik 3
  };
  const color = () => {
    //losowanie koloru
    const colorsTable = ["red", "green", "blue", "yellow"];
    const colorRandom = Math.floor(Math.random() * colorsTable.length);
    return colorsTable[colorRandom];
  };
  let voice_bars_child = document.querySelectorAll("#voice-bars > *"); //wszystkie dzieci voice-bars
  timeline_bars.set(voice_bars_child, {
    y: -30, //przesynięcie o -30px transform Y
    transformOrigin: "50% 50%",
  });
  timeline_bars.staggerFromTo(
    voice_bars_child,
    0.5, //czas trwania animacji
    {
      y: -30,
      delay:0.1,
      scaleY: scale, //powiększamy wysokość obiektu razy 2
      yoyo: true, //działaj w dwie strony(alternate)
      repeat: 1, //dziłaj raz
      fill: color,
    },
    {
      scaleY: 1, //powiększamy wysokość obiektu razy 2
      delay: 0.2, //opóźnienie
      yoyo: true, //działaj w dwie strony(alternate)
      repeat: 1, //dziłaj raz
      fill: color,
      y: -30,
    },
    0.1, //opóźnienie każdego z elementów
  );
  voice_bars_child;
  return timeline_bars;
};

const blink_eyes = () => {
  const timeline_bars = new TimelineMax();
  return timeline_bars;
};

const move_legs = () => {
  const timeline_bars = new TimelineMax();
  return timeline_bars;
};

//Master time line
const master = new TimelineMax();
master.add(move_bars()); //wywołanie