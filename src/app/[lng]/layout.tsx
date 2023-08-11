import { FC, ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'

import { Navbar } from '@/components/navbar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'e-Glide',
  description: 'Surf the web to glide faster'
}

interface IRootLayoutProps {
  children: ReactNode
  params: Params
}

const RootLayout: FC<IRootLayoutProps> = ({ children, params }) => {
  return (
    <html lang={params.lng}>
      <body className={inter.className}>
        <Navbar lng={params.lng} />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
