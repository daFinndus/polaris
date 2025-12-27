import Link from "next/link"

import { Button } from "@/components/ui/button"

import { TbError404 } from "react-icons/tb"

export const ErrorPageButton = () => {
    return (
        <Link href={"/err"} className={"notebook:w-12 flex h-12 w-1/2 items-center"}>
            <Button variant="secondary" className={"h-full w-full"} aria-label={"This will redirect to the error page."}>
                <TbError404 />
            </Button>
        </Link>
    )
}
