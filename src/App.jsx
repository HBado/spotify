import React, { useEffect, useState } from 'react';
import axios from "axios"
import Container from './components/Container'
import BottomPlayer from './components/BottomPlayer'
import SideBar from './components/SideBar'

export default function App() {
  const [data, setData] = useState({allPlaylists: [], recentlyPlayed: [], recommended: [] })
  useEffect(() => {    
    axios.get('http://zmdp.cloud/iseAlim/spotify.json').then(res=>{
      setData(res.data)
    })
  }, [])
  return (
    <>
      <div className='inner-container'>
        <SideBar musiclist={data.allPlaylists}></SideBar>
        <Container data={data}></Container>
      </div>
      <BottomPlayer></BottomPlayer>
    </>
  )
}