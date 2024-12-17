import { useEffect, useRef } from "react";
import cipher from "../assets/cipher.mp3";
export const Music = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 1;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={cipher} type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </>
  );
};
