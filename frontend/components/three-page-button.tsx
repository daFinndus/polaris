import Link from "next/link";

import {Button} from "@/components/ui/button";

import {TbBrandThreejs} from "react-icons/tb";

export default function ThreePageButton() {
    return (
        <>
            <Link href={"/three"} className={"notebook:w-12 w-1/2 flex items-center h-12"}>
                <Button variant={"secondary"} className={"w-full h-full"}>
                    <TbBrandThreejs/>
                </Button>
            </Link>
        </>
    );
}