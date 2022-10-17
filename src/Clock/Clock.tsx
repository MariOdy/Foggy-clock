import React, { useEffect, useState, useRef } from "react";
import { ClockWrapper } from "./styles";
import { AiOutlineGithub } from "react-icons/ai";

const Clock: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        window.VANTA?.FOG?.({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xbebebe,
          midtoneColor: 0xacacac,
          lowlightColor: 0x8e8e8e,
          baseColor: 0x707070,
        }) || null
      );
    }
    return () => vantaEffect?.destroy?.();
  }, [vantaEffect]);

  const [date, setDate] = useState(new Date());

  const refreshClock = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <ClockWrapper id="bg" ref={myRef}>
      <h2>{date.toLocaleTimeString()}</h2>
      <a target="_blank" href="https://github.com/MariOdy" rel="noreferrer">
        <AiOutlineGithub />
      </a>
    </ClockWrapper>
  );
};

export default Clock;
