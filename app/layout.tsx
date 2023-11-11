import NavBar from './components/NavBar'
import './globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className='w-screen min-h-screen bg-gray-100'>
          <main className='m-auto bg-white max-w-screen-2xl'>
            {/* NAVBAR */}
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
