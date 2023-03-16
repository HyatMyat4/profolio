import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar';
import { Provider } from "react-redux";
import { store } from "../Redux/store";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
        <NextNProgress options={{ easing: 'ease', speed: 500 }} color="#2AB9A9" />
        <Component {...pageProps} />
      </Provider>  
    </ThemeProvider>
  )
}

export default MyApp
