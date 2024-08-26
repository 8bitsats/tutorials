// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { IBM_Plex_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

// Include the specific weights you need for your project
const fontHeading = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Add the necessary weights
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'], // Add the necessary weights
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}