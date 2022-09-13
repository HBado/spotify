import React from 'react'
import './SideBar.css'
import SearchIcon from './icons/search'
import HomeIcon from './icons/home'
import BookIcon from './icons/book'

export default function SideBar({ musiclist }) {
  return (
    <aside>
      <div  className="d-inline-flex-p-2">
          <div className= "logo">
            <img src={require('../assets/images/Spotify_Logo_RGB_White.png')} alt="logo"/> 
          </div>
        <div> 
          <ul className='navigator'>
            <li>
              <HomeIcon></HomeIcon>
              <span>Ana Sayfa</span>
            </li>
            <li>
              <SearchIcon></SearchIcon>
              <span>Ara</span>
            </li>
            <li>
              <BookIcon></BookIcon>
              <span>Kitaplığım</span>
            </li>
          </ul>
        </div>
      </div>  

      

      <div className="playlists">
        
        <ul>
        {musiclist.map(music=><li key={music.uid}>{music.name}</li>)}
        </ul>
      
      </div>
  
    </aside>
  )
}
