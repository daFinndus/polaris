import React from "react"

import Passwords from "@/app/data/articles/markdown/passwords.mdx"
import TwoFactorAuthentication from "@/app/data/articles/markdown/two-factor-authentication.mdx"
import ArchLinux from "@/app/data/articles/markdown/arch-linux.mdx"
import ArchLinuxTwo from "@/app/data/articles/markdown/arch-linux-two.mdx"

interface Blog {
    title: string
    date: string
    description: string
    content: React.ReactNode
}

export const blogs: Blog[] = [
    {
        title: "Arch Linux after roughly half a year",
        date: "21.12.2025",
        description:
            "After using Arch Linux for about six months, I've gathered some insights and experiences that I want to share. From installation challenges to daily usage tips, here's what I've learned.",
        content: <ArchLinuxTwo />,
    },
    {
        title: "Arch Linux",
        date: "13.07.2025",
        description:
            "Arch Linux is one of the most popular Linux distributions. It is known for its difficult setup and steep learning curve, but also for its powerful customization options and minimalism.",
        content: <ArchLinux />,
    },
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
