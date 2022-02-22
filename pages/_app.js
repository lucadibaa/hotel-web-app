import '../styles/globals.css'
import { Provider } from 'react-redux'
import NotificationProvider from '../components/assets/notifications/NotificationProvider'
import store from '../redux/store'
import { useEffect } from 'react'
import { isTokenValid } from '../redux/userActions'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(isTokenValid())
  }, [])

  return (
    <Provider store={store}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </Provider>
  )
}

export default MyApp
