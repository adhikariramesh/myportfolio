import './globals.css'
import { Inter } from 'next/font/google';
import Header from './components/Header';
import { Roboto } from 'next/font/google';
import Footer from './components/Footer';

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  display: 'swap'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProtFolio',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
