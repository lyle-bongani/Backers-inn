import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './registry'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Baker's Inn Zimbabwe",
  description: 'The freshest bread and confectionery in Zimbabwe',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Bakers Inn - Fresh Baked Goodness</title>
        <meta name="description" content="Experience fresh baked bread and pastries delivered to your doorstep." />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Nav />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
