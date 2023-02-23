import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Header } from '../layouts/Header'

export default function App({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState(true)
  return (
    <>
      <Header />
      <Component {...pageProps} setLoader={setLoader} loader={loader} />
    </>
  )
}
