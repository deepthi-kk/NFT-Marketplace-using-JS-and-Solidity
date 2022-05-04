/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div  className="h-screen bg-gradient-to-b from-zinc-900 via-gray-800 to-zinc-900" >
      <nav className="p-6">
        <p className="text-white text-4xl">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-6 text-xl text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-xl text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-xl text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-xl text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp