import Link from "next/link";

import {Button} from "@/components/ui/button";
import {useToast} from "@/hooks/use-toast";

import {HiNewspaper} from "react-icons/hi2";

export default function NewsPageButton() {
    const {toast} = useToast();

    const Unavailable = () => {
        toast({
            title: "News broken.",
            description: "I'm sorry but this feature is currently not available.",
            duration: 5000,
            variant: "destructive",
        });
    };

    return (
        <Link
            onClick={Unavailable}
            href={"/"}
            className={"notebook:w-12 w-1/2 flex items-center h-12"}
            aria-label={"Go to the news page"}>
            <Button
                variant={"secondary"}
                className={"w-full h-full"}
                aria-label={"Go to the news page"}>
                <HiNewspaper/>
            </Button>
        </Link>
    );
}
