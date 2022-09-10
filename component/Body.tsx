import React, { useRef } from 'react'
import videojs from 'video.js'
import {Client} from '@livepeer/webrtmp-sdk'
import { create } from 'domain';
import { createStream } from '../utils/apiFactory';
import axios from 'axios';

const Body: React.FC = () => {
  const videoEl = React.useRef(null)
  const apiKey = 'cb508de3-73aa-4765-be38-a2ac25ac6b49'
  const stream = React.useRef(null)
  React.useEffect(()=>{
    async()=>{
      videoEl.current.volume = 0

      stream.current = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })

      videoEl.current.srcObject = stream.current
      videoEl.current.play()
    }
  })

  const startStream = () => {
     axios.post("https://livepeer.com/api/stream", {
      "name": "test_stream",
      "profiles": [
        {
          "name": "720p",
          "bitrate": 2000000,
          "fps": 30,
          "width": 1280,
          "height": 720
        },
        {
          "name": "480p",
          "bitrate": 1000000,
          "fps": 30,
          "width": 854,
          "height": 480
        },
        {
          "name": "360p",
          "bitrate": 500000,
          "fps": 30,
          "width": 640,
          "height": 360
        }
      ]
    })
  }

  return(
    <>
       <div className="App">
      <video className="App-video" ref={videoEl} />
      <button className="App-button" onClick={startStream}>
        Start
      </button>

    </div>
    </>
  )
  
}


export default Body
