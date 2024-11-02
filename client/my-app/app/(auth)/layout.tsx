import '@/src/assets/styles/globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next Pizza | Auth',
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
                <main>{children}</main>
            </body>
        </html>
    )
}
