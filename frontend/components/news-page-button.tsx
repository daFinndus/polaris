import {useEffect, useState} from "react";

import Link from "next/link";

import {useToast} from "@/hooks/use-toast";
import {Button} from "@/components/ui/button";
import {checkBackendConnection} from "@/app/hooks/checkBackendConnection";

import {HiNewspaper} from "react-icons/hi2";

export default function NewsPageButton() {
    const {toast} = useToast();
    const [backend, setBackend] = useState<boolean | null>(null);

    const Unavailable = () => {
        toast({
            title: "News backend not available.",
            description: "The server might be down or https only is enabled.",
            duration: 5000,
            variant: "destructive",
        });
    };

    useEffect(() => {
        checkBackendConnection().then((response) => {
            if (response === null) setBackend(false);
            else setBackend(true);
        });
    }, []);

    return (
        <Link
            onClick={backend == null || !backend ? Unavailable : undefined}
            href={backend == null || !backend ? "/" : "/news"}
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
