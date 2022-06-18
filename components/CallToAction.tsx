import React from 'react'
import { NextPage } from 'next'

type Props = {
  txt: string
  href: string
}

const CallToAction: NextPage<Props> = ({ txt, href }) => {
  return (
    <a className="btn btn-success mx-auto mb-5" href={href}>
      {txt}
    </a>
  )
}

export default CallToAction
