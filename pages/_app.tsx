import "../styles/styles.scss"
import React, { useEffect } from "react"
import { AppProps } from "next/app"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth"

function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
    useEffect(() => {
        import("bootstrap")
    }, [])

    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
