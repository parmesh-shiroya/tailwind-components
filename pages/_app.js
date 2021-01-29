import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center min-h-screen items-center">
        <Component {...pageProps} />
</div>
      )
}

export default MyApp
