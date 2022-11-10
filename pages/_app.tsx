import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/layout/Navigation'
import { ThemeProvider } from 'next-themes'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Navigation>
        <Component {...pageProps} />
      </Navigation>
    </ThemeProvider>
  )
}

export default MyApp
