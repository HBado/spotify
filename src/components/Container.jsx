import React, {useState} from 'react'
import Header from './Header'
import PlayList from './PlayList'
import './Container.css'

export default function Container({data}) {
  const [searchData, setSearchData] = useState(false)
  const searchMethod = (e) => {
    let dataset = [...data.allPlaylists, ...data.recentlyPlayed, ...data.recommended]
    dataset = dataset.filter(music=>music.name.toLowerCase().includes(e.target.value.toLowerCase()))

    if (e.target.value == '') setSearchData(false) // no result
    else setSearchData(dataset) // set results
  }

  return (
    <main>
      <Header onSearch={searchMethod}></Header>

      {
        searchData
        ? <PlayList wrap={true} listName={"Search results"} list={searchData} />
        : <>
          <PlayList listName={"All Playlists"} list={data.allPlaylists} />
          <PlayList listName={"Recently Played"} list={data.recentlyPlayed} />
          <PlayList listName={"Recommended"} list={data.recommended} />
        </>
      }
    </main>
  )
}
