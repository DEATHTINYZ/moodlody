/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { SoundType } from '@/types/types'
import Slider from '@mui/material/Slider'
import React, { useEffect, useRef, useState } from 'react'

const Sound = ({
  src,
  title,
  icon,
  isActive,
  isMuted,
  isPlaying,
  onPlay,
  onPause
}: SoundType) => {
  const [volume, setVolume] = useState(0.5)
  // const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 1
    }
  }, [isMuted])

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(src)
      audioRef.current = audio
      audio.loop = true
    }
    if (isActive) {
      audioRef.current.play()
      onPlay && onPlay()
    } else {
      audioRef.current.pause()
      onPause && onPause()
    }
  }, [isActive, src])

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(src)
      audioRef.current = audio
      audio.loop = true
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, src])

  const handleSoundPlay = () => {
    if (isPlaying) {
      onPause && onPause()
    } else {
      onPlay && onPlay()
    }
  }

  const handleVolumeChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    setVolume(value as number)
    audioRef.current && (audioRef.current.volume = value as number)
  }
  return (
    <div className="relative">
      <div
        onClick={handleSoundPlay}
        className={`p-[3rem_5rem] border-[2px] cursor-pointer border-white rounded-lg flex flex-col gap-[.5rem] justify-center items-center hover:bg-[rgba(255,255,255,.05)] ${
          isPlaying ? 'stop-sound' : 'play-sound'
        }`}
      >
        <div className="text-white font-bold">{title}</div>
        <img src={icon} alt="" className="w-[75px] h-[75px]" />
      </div>
      {isPlaying ? (
        <Slider
          min={0}
          step={0.01}
          max={1}
          onChange={handleVolumeChange}
          value={volume}
          aria-label="Volume"
          className="!absolute !left-1/2 !transform !-translate-x-1/2  !bottom-[20px] !w-[170px] !text-white"
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default Sound
