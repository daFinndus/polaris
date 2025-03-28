import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TbError404 } from "react-icons/tb"

export default function ErrorPageButton() {
    return (
        <Link href={"/err"} className={"flex h-12 w-1/2 items-center notebook:w-12"}>
            <Button variant="secondary" className={"h-full w-full"} aria-label={"This will redirect to the error page."}>
                <TbError404 />
            </Button>
        </Link>
    )
}
