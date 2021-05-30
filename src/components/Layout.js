import { css } from '@emotion/react'
import Head from 'next/head'
import Footer from './Footer'

const layoutStyle = css`
  padding: 2em 0;
  margin: 0 10em;

  @media (max-width: 768px) {
    margin: 0 4em;
  }
  @media (max-width: 576px) {
    margin: 0 2em;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
      </Head>
      <div css={layoutStyle}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
