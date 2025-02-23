import {orbit} from "ldrs";

orbit.register();

export default function Throbber() {
    return (
        <div className={"w-screen flex h-screen bg-background justify-center items-center"}>
            <l-orbit size="40" speed="1.5" color="black"/>
        </div>
    );
}
