import React from 'react'
import VideoHero from './VideoComponents/VideoHero'
import VideoGallery from './VideoComponents/VideoGallery'

function Video() {
  return (
    <div className='mt-24'>
      <VideoHero/>
      <VideoGallery/>
    </div>
  )
}

export default Video
