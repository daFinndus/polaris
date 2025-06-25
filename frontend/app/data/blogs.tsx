import React from "react"

import Image from "next/image"
import Link from "next/link"

interface Picture {
    src: string
    alt: string
    width: number
    height: number
}

const Bild = ({ src, alt, width, height }: Picture) => {
    return (
        <Image
            className={"mx-2 my-8 h-auto w-full rounded-xl shadow-lg shadow-background-lightest"}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    )
}

interface Blog {
    title: string
    date: string
    description: string
    content: React.ReactNode
}

export const blogs: Blog[] = [
    {
        title: "Strong Passwords",
        date: "26.06.2025",
        description:
            "Passwords are the first line of defense against unauthorized access to your accounts and sensitive information.",
        content: (
            <p className={"flex flex-col items-center"}>
                Many people I know use weak passwords repeatedly across multiple accounts. Even though this may be convenient, it is
                a significant security risk. In todays world, where data breaches and phishing attacks are more and more common, it
                is crucial to use strong, unique passwords for each of your accounts. A strong password typically consists of a mix
                of uppercase and lowercase letters, numbers, and special characters. It should be at least 12 characters long and
                not easily guessable. It should not contain any personal information like birthdays, names, or common words. A
                password manager can help you generate and store strong passwords securely, so you don't have to remember them all.
                Personally I can recommend Bitwarden, just click the image below.
                <Link href={"https://bitwarden.com"}>
                    <Bild
                        src={
                            "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/bitwarden-AQqjr4xTcWpZnzyxJf8eVUwgsV05Gp.jpg"
                        }
                        alt={"The bitwarden logo"}
                        width={384}
                        height={232}
                    />
                </Link>
                TL;DR: Use strong, unique passwords with a mix of lowercase and uppercase letters, numbers, and special characters.
                Use a password manager to generate and store them securely.
            </p>
        ),
    },
    {
        title: "Welcome",
        date: "25.06.2025",
        description: "This is the first entry of my blog. Thank you for visiting my website and taking the time to read this.",
        content: (
            <p className={"mt-4 flex flex-col items-center text-primary-darker"}>
                My name is Finn, I am {Math.floor((Date.now() - +new Date("2002-11-10")) / (1000 * 60 * 60 * 24 * 365.25))} years
                old and currently studying Media Engineering at the University of Applied Sciences in Kiel. I am highly interested
                in technology, escpecially cybersecurity, and I strive to learn as much as I can about it. This blog is a way for me
                to share my knowledge and experiences with others, and I hope you find it helpful and informative. I will be writing
                about various topics related to technology, cybersecurity, and my personal experiences in the field. If you have any
                questions or suggestions for future blog posts, feel free to reach out to me via the contact form on this website.
                <Bild
                    src={
                        "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/edgerunners-4YAasH0FPF47NheurrLiEaRFes6xqU.png"
                    }
                    alt={"This is from the edgerunners anime"}
                    width={480}
                    height={243}
                />
                TL;DR: My name is Finn, I like cybersecurity, thank you for visiting my website and reading this blog.
            </p>
        ),
    },
]
