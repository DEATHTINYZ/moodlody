import '@fontsource/roboto-mono'
import '../styles/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gradient-to-r from-sky-500 to-indigo-500">
        {children}
      </body>
    </html>
  )
}
