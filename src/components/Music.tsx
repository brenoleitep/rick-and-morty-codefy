import { useEffect, useRef } from "react";

export const Music = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/cipher.mp3" type="audio/mp3" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </>
  );
};
