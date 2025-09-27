import React from 'react'
import GallerySection from './galleryComponents/GallerySection'
import GalleryHero from './galleryComponents/GalleryHero'
import GalleryFooter from './galleryComponents/GalleryFooter'

function Gallery() {
  return (
    <div className='mt-24'>
      <GalleryHero/>
      <GallerySection/>
      <GalleryFooter/>
    </div>
  )
}

export default Gallery
