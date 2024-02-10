import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <Link href="/protected">Navigate To Protected Route</Link>
        </div>
      </main>
  )
}

export default HomePage