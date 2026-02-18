import React from "react"

import "./globals.css"

import type { Metadata } from "next"

import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
    title: {
        default: "Finn Luca Jensen",
        template: "%s | Finn Luca Jensen", // subpages get "About | Finn Luca Jensen" etc.
    },
    description: "Portfolio of Finn Luca 'daFinndus' Jensen — full-stack developer specializing in ...",
    keywords: ["Finn Luca Jensen", "daFinndus", "portfolio", "web developer", "..."],
    authors: [{ name: "Finn Luca Jensen" }],
    creator: "Finn Luca Jensen",

    // Canonical URL — very important
    metadataBase: new URL("https://finnlucajensen.vercel.app"),
    alternates: {
        canonical: "/",
    },

    // Open Graph — controls how your site looks when shared on Discord, Slack, etc.
    openGraph: {
        title: "Finn Luca Jensen",
        description: "Portfolio of Finn Luca 'daFinndus' Jensen",
        url: "https://finnlucajensen.vercel.app",
        siteName: "Finn Luca Jensen",
        images: [
            {
                url: "/og-image.png", // 1200x630px image
                width: 1200,
                height: 630,
                alt: "Finn Luca Jensen — Portfolio",
            },
        ],
        locale: "en_DE",
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
