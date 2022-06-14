import React from 'react'

import Info from './Info.mdx'

const mdxReader = (mdx) => mdx().props.children.props.children

const Rental = () => {
  return (
    <div className="text-dark container bg-secondary">
      <Info />
    </div>
  )
}

export default Rental
