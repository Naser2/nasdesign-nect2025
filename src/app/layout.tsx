import '@/styles/tailwind.css'
import type { Metadata } from 'next'


import { Toaster } from 'sonner';
// import "../globals.scss";
import { AppWrapper } from "./context";
import { Navbar } from '@/components/navbar';


export const metadata: Metadata = {
  title: {
    template: '%s - NAsDesign',
    default: 'NasDesign - Close every app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/css?f%5B%5D=switzer@400,500,600,700&amp;display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="The NasDesign Blog"
          href="/blog/feed.xml"
        />
      </head>
      
      <AppWrapper>
        {/* <Navbar /> */}
        <body className="text-gray-950 antialiased">{children}</body>
      </AppWrapper>
      <Toaster position="top-right" richColors />
      {/* <body className="text-gray-950 antialiased">{children}</body> */}
    </html>
  )
}
