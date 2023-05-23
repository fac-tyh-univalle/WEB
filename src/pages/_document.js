import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TOURISTA</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </Html>
  )
}
