import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gaze',
  description: 'Push notifications for verified NFT collections',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
