
import React, { useState, useRef, useEffect } from 'react';
import { MusicOnIcon, MusicOffIcon } from './icons';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const musicUrl = 'https://cdn.pixabay.com/audio/2022/02/14/audio_291fa1a260.mp3';

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
            console.log("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  useEffect(() => {
    const handleAudioEnd = () => setIsPlaying(false);
    const audioEl = audioRef.current;
    if(audioEl) {
        audioEl.addEventListener('ended', handleAudioEnd);
    }
    return () => {
        if(audioEl) {
            audioEl.removeEventListener('ended', handleAudioEnd);
        }
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={musicUrl} loop />
      <button
        onClick={togglePlay}
        className="fixed bottom-5 right-5 z-50 bg-white/80 backdrop-blur-sm text-emerald-700 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <MusicOnIcon className="h-6 w-6" /> : <MusicOffIcon className="h-6 w-6" />}
      </button>
    </>
  );
};

export default AudioPlayer;
