import React from 'react'
import './TopHero.css';

export default function TopHero() {
  return (
      <div className="h-[33vh] md:h-[23vh] bg-[#152039] mb-10 flex items-center">
        <div className="px-8 md:px-4 text-left">
          <h3 className="text-lg text-white font-light mb-2">We use</h3>
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight">
            LATEST TECHNOLOGIES
          </h1>
        </div>
      </div>
  )
}
