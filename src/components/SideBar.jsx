import React from 'react'
import './SideBar.css'
import SearchIcon from './icons/search'

export default function SideBar({ musiclist }) {
  return (
    <aside>
      <div  className="d-inline-flex-p-2">
          <div className= "logo">
            <img  src={require('../assets/images/Spotify_Logo_RGB_White.png')}/> 
          </div>
        <div> 
          <ul className='navigator'>
            <li>
              <SearchIcon></SearchIcon>
              <span>Ana Sayfa</span>
            </li>
            <li>
              <SearchIcon></SearchIcon>
              <span>Ara</span>
            </li>
            <li>
              <SearchIcon></SearchIcon>
              <span>Kitaplığım</span>
            </li>
          </ul>
        </div>
      </div>  

      <div className="playlists" >
        <ul>
        {musiclist.map(music=><li key={music.uid}>{music.name}</li>)}
        </ul>
      </div>
    </aside>
  )
}
