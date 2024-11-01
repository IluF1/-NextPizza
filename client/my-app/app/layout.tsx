import { Header } from '@/src/layout'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './assets/styles/globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next Pizza',
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
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </body>
        </html>
    )
}
