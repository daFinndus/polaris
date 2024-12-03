import Link from "next/link";

import {Button} from "@/components/ui/button";

import {HiNewspaper} from "react-icons/hi2";

export default function NewsPageButton() {
    return (
        <>
            <Link href={"/news"} className={"notebook:w-12 w-1/2 flex items-center h-12"}>
                <Button variant={"secondary"} className={"w-full h-full"}>
                    <HiNewspaper/>
                </Button>
            </Link>
        </>
    );
}