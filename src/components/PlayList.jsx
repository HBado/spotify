import React from 'react'
import PlayListItem from './PlayListItem'
import './PlayList.css'

export default function PlayList({ listName, list, wrap }) {
  return (
    <div>
      <h2>{listName || 'Music List'}</h2>

      <div className='list-container' style={{flexWrap: wrap ? 'wrap' : 'nowrap'}}>
        {list.map(el=><PlayListItem  key={el.id} music={el}/>)}
      </div>
    </div>
  )
}
