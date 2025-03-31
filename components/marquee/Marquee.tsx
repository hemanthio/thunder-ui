"use client"

import React from 'react'

export default function Marquee() {
  const text = "sale is live  "

  return (
    <div className="w-full overflow-hidden bg-red-500 py-1">
      <div className="animate-marquee whitespace-nowrap inline-flex">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mx-4 text-base md:text-xs font-regular opacity-90 text-white uppercase font-medium inter-tight tracking-wide">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}