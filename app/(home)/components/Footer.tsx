import React from 'react'
import Navbar from './Navbar'

export default function Footer() {
  return (
    <div className="border-t mt-20">
        <div className="flex items-center justify-center text-center text-gray-400 mt-5">Living, learning, & leveling up one day at a time.</div>
        <Navbar className="flex-col gap-6"/>
    </div>
  )
}
