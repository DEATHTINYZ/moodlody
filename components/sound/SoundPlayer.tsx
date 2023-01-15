/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { SoundListType } from '@/types/types'
import Tooltip from '@mui/material/Tooltip'
import React, { useState } from 'react'
import {
  BsFillStopFill,
  BsFillVolumeMuteFill,
  BsFillVolumeUpFill
} from 'react-icons/bs'
import { FiShuffle } from 'react-icons/fi'
import Sound from './Sound'

const SoundList = ({ sounds }: SoundListType) => {
  const MAX_SOUNDS = 5
  const [currentSoundIndex, setCurrentSoundIndex] = useState([0])
  const [isMuted, setIsMuted] = useState(false)
  const [playingSounds, setPlayingSounds] = useState<{
    [index: number]: boolean
  }>({})

  const handleShuffle = () => {
    if (currentSoundIndex.length < MAX_SOUNDS) {
      const randomIndex = Math.floor(Math.random() * sounds.length)
      setCurrentSoundIndex([...currentSoundIndex, randomIndex])
      setPlayingSounds({ [randomIndex]: true })
    } else {
      let newCurrentSoundIndexe = [...currentSoundIndex]
      newCurrentSoundIndexe.shift()
      newCurrentSoundIndexe.push(Math.floor(Math.random() * sounds.length))
      setCurrentSoundIndex(newCurrentSoundIndexe)
    }
  }

  const handleMuteUnmute = () => {
    setIsMuted(!isMuted)
  }

  const handleStopAll = () => {
    setPlayingSounds({})
    setCurrentSoundIndex([])
  }

  return (
    <div className="flex flex-col gap-[2rem] justify-center items-center pb-[4rem]">
      <div className="flex gap-[2rem]">
        <Tooltip title="Shuffle" placement="top">
          <button onClick={handleShuffle} className="player-control">
            <FiShuffle size={20} color="white" />
          </button>
        </Tooltip>
        <Tooltip title="Mute/Umnute" placement="top">
          <button onClick={handleMuteUnmute} className="player-control">
            {isMuted ? (
              <BsFillVolumeMuteFill size={20} color="white" />
            ) : (
              <BsFillVolumeUpFill size={20} color="white" />
            )}
          </button>
        </Tooltip>
        <Tooltip title="Stop/Reset" placement="top">
          <button onClick={handleStopAll} className="player-control">
            <BsFillStopFill size={20} color="white" />
          </button>
        </Tooltip>
      </div>
      <div className="grid gap-[2rem] sm:grid-cols-2 lg:grid-cols-4">
        {sounds.map((sound, index) => {
          return (
            <Sound
              key={index}
              {...sound}
              isActive={currentSoundIndex.includes(index)}
              isMuted={isMuted}
              isPlaying={playingSounds[index]}
              onPlay={() =>
                setPlayingSounds({ ...playingSounds, [index]: true })
              }
              onPause={() => {
                const newPlayingSounds = { ...playingSounds }
                delete newPlayingSounds[index]
                setPlayingSounds(newPlayingSounds)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SoundList
