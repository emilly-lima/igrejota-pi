import { Poppins, Sen, Jaldi } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], display: 'swap', variable: '--font-poppins' })
const sen = Sen({ subsets: ['latin'] })
const jaldi = Jaldi({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'TableTopping',
  description: 'Igrejota',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt" className={`${poppins.variable}`}>
      <body className={[poppins.className, sen.className, jaldi.className]}>{children}</body>
    </html>
  )
}
