import '@/src/assets/styles/globals.css'
import { Header } from '@/src/layout'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
    title: 'Next Pizza | Home',
    description: 'Next Pizza by miraclecancode',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ru'>
            <body className={font.className}>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    )
}
