import '../styles/globals.css'
import { Provider } from 'react-redux'
import NotificationProvider from '../components/assets/notifications/NotificationProvider'
import store from '../redux/store'
import { useEffect } from 'react'
import { isTokenValid } from '../redux/userActions'
import ProgressBar from "@badrap/bar-of-progress"
import Router from 'next/router'

const progress = new ProgressBar({
  size: 3,
  color: "#FE595E",
  className: "z-50",
  delay: 80,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

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
