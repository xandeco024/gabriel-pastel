import type { Metadata } from 'next'
import React from 'react'
import { gluten } from './fonts'

export const metadata: Metadata = {
    title: {
        template: '%s | Gabriel Pastel',
        default: 'Gabriel Pastel',
    },
    description: 'O pastel que te leva até o céu! (do jeito bom)',
}

export default function RootLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <head>
                <title>Gabriel Pastel</title>
            </head>
            <body className={gluten.className} style={{ margin: 0, backgroundColor: '#f1ecc8', lineHeight: 150 + '%' }}>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}