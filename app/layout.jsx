import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    template: '%s – SwimAI Docs',
    default: 'SwimAI Docs'
  },
  description: 'Official documentation for SwimAI – race analysis and annotation for coaches.',
  metadataBase: new URL('https://docs.swim-analysis.com')
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        {children}
      </body>
    </html>
  )
}
