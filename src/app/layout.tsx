import type { Metadata } from 'next'
import React from 'react'
import { gluten, holtwood } from '../assets/fonts'
import './globals.css'
import { SessionProvider } from '@/components/SessionProvider'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
    title: {
        template: '%s | Gabriel Pastel',
        default: 'Gabriel Pastel',
    },
    description: 'O pastel que te leva até o céu! (do jeito bom)',
    icons: {
        icon: '/icon.png',
        shortcut: '/icon.png',
        apple: '/icon.png',
    },
}

export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en" className={`${gluten.variable} ${holtwood.variable}`}>
            <head>
                <title>Gabriel Pastel</title>
            </head>
            <body>
                <SessionProvider>
                    <div id="root">{children}</div>
                </SessionProvider>
                <Toaster 
                    position="top-right"
                    expand={true}
                    richColors
                    toastOptions={{
                        style: {
                            background: 'white',
                            border: '2px solid',
                            color: '#2c221c',
                        },
                        classNames: {
                            success: 'border-[#10806e]',
                            error: 'border-[#ab3f3f]',
                            warning: 'border-[#f6a011]',
                            info: 'border-[#10806e]',
                        },
                    }}
                />
            </body>
        </html>
    )
}