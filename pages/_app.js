import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { useEffect } from 'react'
import { isTokenValid } from '../redux/userActions'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(isTokenValid())
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
