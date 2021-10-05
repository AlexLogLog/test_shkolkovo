import { StoreContext } from 'storeon/react'
import { store } from '../app/store'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {

  return (
    <StoreContext.Provider value={store}>
      <Component {...pageProps} />
    </StoreContext.Provider>

  )
}



