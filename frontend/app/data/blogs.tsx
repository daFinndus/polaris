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
        title: "Cybersecurity in Everyday Life",
        date: "23.06.2025",
        description:
            "Cybersecurity isn't just for hackers or IT professionals. It's something everyone needs to care about. And here is why.",
        content: (
            <p className={"mt-4 flex flex-col items-center"}>
                We often think of cybersecurity as something for corporations or tech nerds. But the reality is: it affects
                everyone. From your smart TV to your online banking, cybersecurity practices are relevant to daily life. Simple
                habits, like updating your software, being cautious with email links, and avoiding public Wi-Fi for sensitive tasks,
                go a long way. You don’t need to be a hacker to be cyber-aware. TL;DR: Being cyber-secure is part of living in the
                modern world. Start with the basics, and build good habits.
            </p>
        ),
    },
    {
        title: "How I Started With Hack The Box",
        date: "24.06.2025",
        description:
            "Hack The Box is a great platform for learning networking, pentesting, and gaining advanced knowledge about operating systems.\t" +
            "Here’s how I got started.",
        content: (
            <div className={"mt-4 flex flex-col items-center"}>
                I started my journey into ethical hacking with Hack The Box (HTB), and it was a game-changer. HTB offers realistic
                virtual machines to hack, ranging from beginner to advanced difficulty. The hands-on nature of the platform taught
                me more than any tutorial or lecture could.
                <div className={"my-2"} />
                My advice for beginners: Start with the “Starting Point” machines. Don’t feel bad Googling things, that’s part of
                the process. Take notes, break things, try again. Over time, your intuition and skills will grow naturally.
                <Link href={"https://www.hackthebox.com"}>
                    <Bild
                        src={
                            "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/htb-YMHhGbdLb8vbafhd1hLXyW2ZV3vnOL.jpeg"
                        }
                        alt={"Hack The Box screenshot"}
                        width={384}
                        height={232}
                    />
                </Link>
                TL;DR: Hack The Box is a great way to learn practical hacking. Start small, take notes, and keep going.
            </div>
        ),
    },
    {
        title: "Why You Should Use 2FA",
        date: "25.06.2025",
        description:
            "Two-factor authentication adds an essential layer of security to your accounts. Here's why you should enable it everywhere.",
        content: (
            <div className={"mt-4 flex flex-col items-center"}>
                Even the strongest password can be compromised. That’s where two-factor authentication (2FA) comes in. 2FA requires
                not only your password, but also a second form of verification, usually a code from your phone or an authenticator
                app.
                <div className={"my-2"} />
                It might seem like a minor inconvenience, but it makes a massive difference in your account security. Even if
                someone gets your password through a data leak, phishing, or brute force, they still can’t log in without your
                second factor. Personally, I use Authy as my authenticator app. It's simple, secure, and works across devices.
                <Link href={"https://authy.com"}>
                    <Bild
                        src={
                            "https://s8lcpnzirhyz4bbt.public.blob.vercel-storage.com/Blogs/authy-2SlrsiTb4SbjlyMOF35sJ89yL0Fb2w.jpeg"
                        }
                        alt={"Authy App Screenshot"}
                        width={384}
                        height={232}
                    />
                </Link>
                TL;DR: Always enable 2FA. It’s one of the most effective ways to protect your online accounts.
            </div>
        ),
    },
    {
        title: "Strong Passwords",
        date: "26.06.2025",
        description:
            "Passwords are the first line of defense against unauthorized access to your accounts.\t" +
            "So how do you setup a strong defensive line for your accounts?",
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
]
