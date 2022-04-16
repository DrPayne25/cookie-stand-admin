import '../styles/globals.css'
import { AppProps } from 'next/app'
import {AuthProvider} from '../contexts/auth.js'

function MyApp({ Component, pageProps }: AppProps) {
  return <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
}

export default MyApp
