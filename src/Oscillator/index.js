/**
 * @file
 * Just a basic oscillator
 */

import React, { useEffect, useState, useContext, useRef } from "react";
import { audioContext } from "../Synth";

const Oscillator = () => {
  const [min, setMin] = useState(30);
  const [max, setMax] = useState(1000);
  const [waveformType, setWaveform] = useState("square");
  const [value, setValue] = useState(440);
  const oscRef = useRef(null);
  const engine = useContext(audioContext);

  useEffect(() => {
    if (engine.current) {
      const oscillator = (oscRef.current = engine.current.createOscillator());
      oscillator.connect(engine.current.destination);
      oscillator.start();

      return () => oscillator.stop();
    }
  }, [engine]);

  useEffect(() => {
    const oscillator = oscRef.current;
    if (oscillator) {
      oscillator.frequency.setValueAtTime(value, engine.current.currentTime); // value in hertz
    }
  }, [engine, value]);

  useEffect(() => {
    const oscillator = oscRef.current;
    if (oscillator) {
      oscillator.type = waveformType;
    }
  }, [waveformType]);

  return (
    <input
      onChange={event => setValue(event.target.value)}
      type="range"
      min={min}
      max={max}
      value={value}
      className="slider"
      id="myRange"
    ></input>
  );
};

export default Oscillator;
