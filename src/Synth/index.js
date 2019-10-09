/**
 * @file
 * Parent component; houses global state
 */

import React, { createContext, useRef, useState } from "react";

export const audioContext = createContext(null);

const Synth = ({ children, ...props }) => {
  const engine = useRef(null);
  const [power, setPowerState] = useState(false);

  const toggleSynth = event => {
    if (power) {
      if (engine.current.close) engine.current.close();
      engine.current = null;
    } else {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!engine.current) {
        engine.current = new AudioContext();
      }
    }

    setPowerState(!power);
  };

  // useEffect(() => {
  //   return () => engine.current.close ? engine.current.close() : null;
  // }, []);

  return (
    <audioContext.Provider value={engine}>
      <div className="react-synth">
        <button onClick={toggleSynth}>{power ? "Off!" : "On!"}</button>
        {power ? children : null}
      </div>
    </audioContext.Provider>
  );
};

export default Synth;
