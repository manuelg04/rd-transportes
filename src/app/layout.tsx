import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import './globals.css'
import { WhatsAppFloatButton } from './components/WhatsappButton'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
         <Navbar />
        {children}
        <WhatsAppFloatButton />
        <Footer />
      </body>
    </html>
  )
}