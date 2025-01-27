import React from 'react'
import aboutbanner from '../assets/Images/aboutbanner.jpg'
import { FaRegPlayCircle } from 'react-icons/fa'

function Hero_video() {
  return (
    <div className="relative">
      <div className="information relative mx-auto container text-center">
        When you start with a portrait and search for a pure form, a clear
        volume, through successive eliminations,
        <span className="block">
          you arrive inevitably at the egg. Likewise, starting with the egg and
          following the same process in reverse,{' '}
        </span>
        one finishes with the portrait.
      </div>
      <div className="videoimg relative mt-12 h-auto mx-auto container hover:brightness-50 hover:scale-105 duration-300 delay-3">
        <span className="flex justify-center">
          <div className="relative ">
            <FaRegPlayCircle className="absolute left-[45%] top-[45%] text-white text-8xl" />
            <img src={aboutbanner} alt="this is an img" className="" />
          </div>
        </span>
      </div>
    </div>
  )
}

export default Hero_video
