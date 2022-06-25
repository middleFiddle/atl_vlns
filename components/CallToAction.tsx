import React from 'react'
import { NextPage } from 'next'


type Props = {
  href: string
  children: any
  action: string
}

const CallToAction: NextPage<Props> = ({ children, href, action }) => {
  return (

    <a href={href} className="btn btn-lg btn-outline-primary mx-auto w-100" >{children}<span className="px-3 lead">{action}</span></a>

  )
}

export default CallToAction
