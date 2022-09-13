import React, { useState, useEffect } from 'react'
import SearchIcon from '../components/icons/search'
import './BottomPlayer.css'
import SkipIcon from '../components/icons/skip'
import ReverseSkipIcon from '../components/icons/reverseSkip'
import StartIcon from '../components/icons/run'

// import axios from 'axios'
// import SpotifyPlayer from 'react-spotify-web-playback';

export default function BottomPlayer() {
  // const [token, setToken] = useState("BQAnrUNr2BLXxaJLVgwBYnZUuyIot_-6jE1R4-0fSUbYoiOfntiXslggvqe1pcLMlrvaC-_wiW1DY3gsXjdVUgRZs_wOW6bOA2gp8dQrn1rxJ23ToH_fogt09c_qqBDe1tp4xtYlf8ldCr6MFQXKTP4Clr0683HfN5mYnK4HHKa_kt8XXOF1nRSO9CbsY3XDcVcg")
  // useEffect(() => {
  //   const redirectURL = "http://localhost:3000"
  //   const clientID = "859284ed92cf407f9c2c17b3fa1220f5"
  //   const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&scope=streaming%20user-read-email%20user-read-private&redirect_uri=${redirectURL}`
  //   // 1. son token geçerli mi
  //   // değilse yeni token iste
  //   axios.get(url).then(res=>{
  //     if(res.status !== 401) {
  //       console.log(res.data)
  //       // setToken(res.data)
  //     }
  //   })

  // }, [])
  
  return (
    <div className="bottom-container">
      {/* <SpotifyPlayer
        token={token}
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      />; */}

      <div className='flex flex-row'>
        <div style={{width: 70, height: 70}}>
          <img src={require('../assets/images/attackOfDead.jfif')} alt=""/>
        </div>
        <div className='flex flex-col ml-4'>
          <span>The Attack of the Dead Men</span>
          <span className='opacity-60 size-12'>Sabaton</span>
        </div>
      </div>

      <div className='progress-container'>
        <div className='controller-container'>
          <ReverseSkipIcon/>
          <StartIcon/>
          <SkipIcon/>
        </div>

        <div className='bar-wrapper'>
          <span>00:45</span>
          <div className='bar'/>
          <span>03:42</span>
        </div>
      </div>

    </div>
  )
}