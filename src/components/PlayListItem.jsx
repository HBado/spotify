import React from 'react'
import './PlayListItem.css'

export default function PlayListItem({ music }) {
  return (
    <div className='list-item'>
      <img src={music.images[0].url} alt={music.name} />

      <div className='bottom'>
        <div>{music.name}</div>
        <div>{music.name}</div>
      </div>
    </div>
  )
}