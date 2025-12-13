import { useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/music web porto feby.mp3" type="audio/mp3" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-pink-600 hover:bg-pink-500 p-4 rounded-full shadow-lg transition"
        aria-label="Toggle Music"
      >
        {playing ? "⏸️" : "🎵"}
      </button>
    </>
  );
};

export default MusicPlayer;
