import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import './globals.css'

export const metadata: Metadata = {
  title: 'kdimz',
  description: 'Website of Kyle Baguio Dimzon'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
         <link rel="icon" href="/Kletter.svg" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        
        <link rel="icon" href="/Kletter.png" sizes="any" />
     
      </head>
      <body>{children}</body>
    </html>
  )
}
