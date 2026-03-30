import React from "react"

import "./globals.css"

import type { Metadata } from "next"

import { GeistSans } from "geist/font/sans"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: {
        default: "Finn Luca Jensen",
        template: "%s | Finn Luca Jensen",
    },
    description: "Portfolio of Finn Luca 'daFinndus' Jensen",
    keywords: ["Finn Luca Jensen", "daFinndus", "portfolio", "web developer", "htb enjoyer", "student", "..."],
    authors: [{ name: "Finn Luca Jensen" }],
    creator: "Finn Luca Jensen",
    metadataBase: new URL("https://finnlucajensen.vercel.app"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Finn Luca Jensen",
        description: "Portfolio of Finn Luca 'daFinndus' Jensen",
        url: "https://finnlucajensen.vercel.app",
        siteName: "Finn Luca Jensen",
        images: [
            {
                url: "/lucy.webp",
                width: 735,
                height: 413,
                alt: "Finn Luca Jensen — Portfolio",
            },
        ],
        locale: "de_DE",
        type: "website",
    },
    icons: {
        icon: "/favicon/favicon.ico",
        shortcut: "/favicon/favicon-16x16.png",
        apple: "/favicon/apple-touch-icon.png",
    },
    manifest: "/favicon/site.webmanifest",
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${GeistSans.className} antialiased`}>
                {children}
                <Toaster />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}
