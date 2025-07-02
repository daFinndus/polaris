import React from "react"

import Passwords from "@/app/data/articles/markdown/passwords.mdx"
import TwoFactorAuthentication from "@/app/data/articles/markdown/two-factor-authentication.mdx"

interface Blog {
    title: string
    date: string
    description: string
    content: React.ReactNode
}

export const blogs: Blog[] = [
    {
        title: "Two-Factor Authentication",
        date: "02.07.2025",
        description:
            "Two-factor authentication (2FA) adds an extra layer of security to your accounts. It requires not only a password and username but also something that only the user has on them.",
        content: <TwoFactorAuthentication />,
    },
    {
        title: "Strong and Secure Passwords",
        date: "01.07.2025",
        description:
            "Passwords are the first line of defense for our accounts. Creating strong passwords and storing them securely is challenging. Here's the best way to do it.",
        content: <Passwords />,
    },
]
