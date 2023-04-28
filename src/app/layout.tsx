import '../styles/globals.css'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'Krypto | Home',
  description: 'A marketplace for rare NFTs',
}

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'],})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en"
      className={roboto.className}>
      <body className='min-h-screen text-slate-50'>
        <main>{children}</main>
      </body>
    </html>
  )
}
