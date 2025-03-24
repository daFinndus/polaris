import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TbError404 } from "react-icons/tb";

export default function ErrorPageButton() {
  return <Link href={"/err"} className={"notebook:w-12 w-1/2 flex items-center h-12"}>
    <Button variant="secondary" className={"w-full h-full"} aria-label={"This will redirect to the error page."}>
      <TbError404 />
    </Button>
  </Link>;
}