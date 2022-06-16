import React from 'react'

import PropTypes, { InferProps } from 'prop-types'

function CallToAction({
  txt,
  href,
}: InferProps<typeof CallToAction.propTypes>) {
  return (
    <a className="btn btn-success mx-auto mb-5" href={href}>
      {txt}
    </a>
  )
}

CallToAction.propTypes = {
  txt: PropTypes.string,
  href: PropTypes.string.isRequired,
}

export default CallToAction
