import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata = {
  title: 'Abhiraksha',
  description:
    'Continuous, 100%-coverage audit for companies of any size, with extra cross-entity fraud detection for groups.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
