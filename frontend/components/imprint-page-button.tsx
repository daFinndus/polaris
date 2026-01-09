import Link from "next/link"

import { Button } from "@/components/ui/button"

import { GoLaw } from "react-icons/go"

export const ImprintPageButton = () => {
    return (
        <Link href="/imprint" className={"notebook:w-12 flex h-12 w-1/2 items-center"}>
            <Button variant="secondary" className={"h-full w-full"} aria-label={"This will redirect to the imprint page."}>
                <GoLaw />
            </Button>
        </Link>
    )
}
