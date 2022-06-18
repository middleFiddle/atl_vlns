import '../styles/styles.scss'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('bootstrap')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
