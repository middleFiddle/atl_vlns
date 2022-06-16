import React from 'react'
import Image from 'next/image'
import PropTypes, { InferProps } from 'prop-types'

function Banner({ title }: InferProps<typeof Banner.propTypes>) {
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

Banner.propTypes = {
  title: PropTypes.string,
}

export default Banner
