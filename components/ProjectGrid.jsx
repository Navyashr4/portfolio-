import Image from 'next/image'
import React from 'react'

const ProjectGrid = () => {
  const images = [
    { src: '/assets/work/thumb1.png', alt: 'Image 1', text: 'Details about Image 1' },
    { src: '/assets/work/thumb3.png', alt: 'Image 2', text: 'Details about Image 2' },
    { src: '/assets/work/thumb2.png', alt: 'Image 3', text: 'Details about Image 3' },
    { src: '/assets/work/thumb1.png', alt: 'Image 4', text: 'Details about Image 4' },
    { src: '/assets/work/thumb3.png', alt: 'Image 5', text: 'Details about Image 5' },
    { src: '/assets/work/thumb2.png', alt: 'Image 6', text: 'Details about Image 6' },
    // { src: '/assets/work/thumb1.png', alt: 'Image 7', text: 'Details about Image 7' },
    // { src: '/assets/work/thumb3.png', alt: 'Image 8', text: 'Details about Image 8' },
    // { src: '/assets/work/thumb1.png', alt: 'Image 9', text: 'Details about Image 9' },
    // { src: '/assets/work/thumb3.png', alt: 'Image 10', text: 'Details about Image 10' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24 justify-between">
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden max-h-[600px]">
          <div className="transition-transform duration-300 transform group-hover:-translate-y-2">
            <Image src={image.src} alt={image.alt} width={400} height={300} className="w-full h-auto object-contain" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg">{image.text}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectGrid
