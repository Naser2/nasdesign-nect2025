export default function SETTINGS({ children }) {
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
          title="Nasser Sanou Blog"
          href="/blog/feed.xml"
        />
      </head>
      <div className="text-gray-950 antialiased">{children}</div>
    </html>
  )
}