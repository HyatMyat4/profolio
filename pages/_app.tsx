import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        <NextNProgress options={{ easing: 'ease', speed: 500 }} color="#2AB9A9" />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
