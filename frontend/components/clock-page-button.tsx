import Link from "next/link"

import { Button } from "@/components/ui/button"

import { FaClock } from "react-icons/fa6"

export const ClockPageButton = () => {
    return (
        <Link href={"/clock"} className={"flex h-12 w-1/2 items-center notebook:w-12"}>
            <Button variant="secondary" className={"h-full w-full"} aria-label={"This will redirect to the error page."}>
                <FaClock />
            </Button>
        </Link>
    )
}
