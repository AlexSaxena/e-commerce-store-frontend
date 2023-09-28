import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <nav>
        <h1>Home</h1>
          <Navbar />
      </nav>
    </main>
  )
}
