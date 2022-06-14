import React from 'react'
import Image from 'next/image'
const Banner = ({ title }) => {
  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <div className="container fluid d-flex justify-content-center">
        <Image
          src="/theShop.png"
          width={431}
          height={233}
          alt="beautiful watercolor of our little old shop in Roswell"
        />
      </div>
    </div>
  )
}

export default Banner
