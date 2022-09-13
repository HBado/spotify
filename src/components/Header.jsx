import React from 'react'
import './Header.css'
import SearchIcon from './icons/search'

export default function Header({ onSearch }) {
  return (
    <header>
      <div className="flex flex-column">
      
        <input className='searchbar' type="search" placeholder='Ara' onInput={onSearch} />
        <button className="btn btn-outline-success flex align-center absolute" type="submit">
          <SearchIcon />
        </button>
      </div>

      <div className='profile'>
        <img src={require('../assets/images/huseyin.jpeg')}/>
        <span>Hüseyin Bariş Yaşık</span>
      </div>
    </header>
  )
}