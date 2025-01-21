import {useEffect, useState} from "react";

import axios from "axios";
import {GiCardJoker} from "react-icons/gi";

export default function Joke() {
    const [joke, setJoke] = useState("Nice to meet you! I'm a joke.");

    const fetchJoke = async () => {
        try {
            const response = await axios.get("https://v2.jokeapi.dev/joke/Programming?format=txt&type=single");
            setJoke(response.data);
        } catch (err) {
            console.log("Error fetching joke:", err);
        }
    }

    useEffect(() => {
        fetchJoke().catch(err => console.error("Error fetching joke:", err.stack));
    }, []);

    return (
        <div
            className={
                "flex h-max flex-col rounded-xl border-2 border-background-lighter  bg-background-light p-4 text-primary tablet:w-[526px]"
            }
        >
            <div className={"flex"}>
                <GiCardJoker className={"size-6 text-color-light"}/>
                <p className={"ml-3 text-xl font-bold"}>Classic Programmer Joke</p>
            </div>
            <p className={"text-sm mt-2"}>{joke}</p>
        </div>
    )
}