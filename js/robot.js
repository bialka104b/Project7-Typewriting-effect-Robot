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
    fill:"rgb(72, 179, 230)"
  });
  timeline_bars.staggerFromTo(
    voice_bars_child,
    0.5, //czas trwania animacji
    {
      y: -30,
      delay: 0.1,
      scaleY: scale, //powiększamy wysokość obiektu razy 2
      yoyo: true, //działaj w dwie strony(alternate)
      repeat: 1, //dziłaj raz
      fill: color,
    },
    {
      scaleY: 1, //powiększamy wysokość obiektu razy 2
      delay: 0.2, //opóźnienie
      //yoyo: true, //działaj w dwie strony(alternate)
      repeat: 1, //dziłaj raz
      fill: color,
      y: -30,
      yoyo:true
    },
    0.1, //opóźnienie każdego z elementów
  );
  voice_bars_child;
  return timeline_bars;
};

const move_bars1 = () => {
  const timeline_bars = new TimelineMax({
    onComplete: move_bars1,
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
    1, //czas trwania animacji
    {
      y: -30,
      delay: 0.1,
      scaleY: 1, //powiększamy wysokość obiektu razy 2
      yoyo: true, //działaj w dwie strony(alternate)
      repeat: 1, //dziłaj raz
      fill: color,
    },
    {
      transformOrigin: "50% 50%",
      scaleY: scale, //powiększamy wysokość obiektu razy 2
      delay: 0.2, //opóźnienie
      yoyo: true, //działaj w dwie strony(alternate)
      repeat: 1, //dziłaj raz
      fill: color,
      y: -30,
    },
    0.2, //opóźnienie każdego z elementów
  );
  voice_bars_child;
  return timeline_bars;
};

const blink_eyes = () => {
  const timeline_bars = new TimelineMax({
    repeat: -1,
    repeatDelay: 2,
  });
  const eyes = document.querySelectorAll("#eye-left, #eye-right");
  timeline_bars
    .set(eyes, {
      transformOrigin: "50% 50%",
      delay:2,
    })
    .to(
      //bo na obu naraz chcemy wykonywac animacje
      eyes,
      0.15,
      {fill: "#231f20", scaleY: 0},
      "+=0.1",
    )
    .to(eyes, 0.2, {fill: "#48b3e6", scaleY: 1}, "+=0.1")
    .to(eyes, 0.03, {fill: "#231f20", scaleY: 0}, "+=0.1")
    .to( eyes, 0.1, {fill: "#48b3e6", scaleY: 1}, "+=0.3")
    .to(eyes, 0.08, {fill: "#231f20", scaleY: 0}, "+=0.1")
    .to( eyes, 0.05, {fill: "#48b3e6", scaleY: 1}, "+=0.05");
  return timeline_bars;
};

const move_legs = (legs) => {
  const timeline_bars = new TimelineMax();
  timeline_bars.staggerTo(
    legs,
    0.2,
    {
      y: -50,
      repeat: -1, //dziłaj w nieskończoność
      yoyo: true, //działaj w dwie strony(alternate)
    },
    0.25,
  );
  return timeline_bars;
};

//Master time line
const master = new TimelineMax();
master.add("start"); //obie te animacje maja wykonać się w tym samym czasie a nie jedna po drugiej
const legs = document.querySelectorAll("#leg-right, #leg-left");
master.add(move_legs(legs)); //wywołanie
master.add(move_bars(), "start"); //wywołanie tułowia
master.add(blink_eyes(), "start"); //wywołanie tułowia
