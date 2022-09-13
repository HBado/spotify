import React from 'react'
import './BottomPlayer.css'
import SpotifyPlayer from 'react-spotify-web-playback';

export default function BottomPlayer() {
  return (
    <div className="bottom-container">
      <SpotifyPlayer
        token="BQBt-SOBaUXgM45ql1oskWr13jS_pEzxsJqyysFQdZrghI9AkILkx9h5IR2UYhz0gLQaW9-xcvzzr8imEZ0ACoQLBBzctNeqU7OrbjKagmyjs5C4TgoKn7CW093tm20Y5j6fsLGZumz1b5hmmJh3Bd7Jkm_NxedADuhSF9rrndGf66goL9ied-zrUAfxWC0vTxpQ"
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
      />;
    </div>
  )
}