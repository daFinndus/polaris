import React from "react"

import "./globals.css"

import type { Metadata } from "next"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: "Finn Luca Jensen",
    description: "This is the portfolio of Finn Luca 'daFinndus' Jensen",
    icons: {
        icon: "/favicon/favicon.ico",
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <title>Finn Luca Jensen</title>
                <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <body className={`${GeistSans.className} antialiased`}>
                {children}
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
