import type { Metadata } from 'next'
import React from 'react'
import { gluten, holtwood } from '../assets/fonts'
import './globals.css'

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
                <div id="root">{children}</div>
            </body>
        </html>
    )
}