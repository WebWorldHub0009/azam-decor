import React from 'react'
import GallerySection from './galleryComponents/GallerySection'
import GalleryHero from './galleryComponents/GalleryHero'

function Gallery() {
  return (
    <div className='mt-24'>
      <GalleryHero/>
      <GallerySection/>
    </div>
  )
}

export default Gallery
