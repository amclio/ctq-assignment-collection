import 'modern-normalize/modern-normalize.css'
import Layout from '../components/Layout'
import { globalStyles } from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {globalStyles}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
