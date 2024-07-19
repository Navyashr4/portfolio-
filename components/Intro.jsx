import React from 'react'

const Intro = () => {
  return (
    <div className='max-w-[900px] flex flex-col text-white/60 gap-y-9 text-xl md:text-2xl lg:text-3xl font-normal py-20'>
      <p>Hi!</p>
      <p>I am <span className='text-white'>Navya Vedachala</span>. I am a full-stack software developer currently pursuing a Master's degree in Computer Science at the <span className='text-white'>University of Chicago.</span></p>
      <p>He designs digital products with
      immersive technology. Storytelling and prototyping is his jam. Past: <span className='text-white'>TikTok, Apple.</span></p>
      <p>See him in <span className='text-decoration: underline'>action</span>. Check <span className='text-decoration: underline'>reel</span>.</p>
    </div>
  )
}

export default Intro
