import React, {useEffect, useState} from "react";

import axios from "axios";

import {Button} from "@/components/ui/button";
import {CiLink} from "react-icons/ci";

const uri = `${process.env.NEXT_PUBLIC_RENDER_BACKEND}/api/articles`;

interface Article {
    _id: string,
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

const ArticleCard = ({article}: { article: Article }) => {
    return (
        <div
            className={"relative flex h-96 w-72 flex-col rounded-xl border-2 border-background-lighter bg-background-light"}>
            <h1 className={"p-4 mb-2 text-sm h-20"}>{article.title}</h1>
            <p className={"text-xs absolute bg-background-lighter h-8 items-center text-center flex top-52 p-4"}>{article.source.name}</p>
            <img className={"h-40 flex justify-center items-center"} src={article.urlToImage}
                 alt={article.source.name}/>
            <p className={"text-xs p-4 h-20 overflow-scroll"}>{article.description}</p>
            <Button variant={"secondary"} className={"absolute bottom-2 right-2 w-fit text-primary h-fit"}
                    onClick={() => window.open(article.url)}>
                <CiLink size={8}/>
            </Button>
        </div>
    );
}

export default function Articles() {
    const [page, setPage] = useState(6);
    const [limit, setLimit] = useState(9);

    const [articles, setArticles] = useState<Article[]>([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get(uri, {params: {page, limit}});
            setArticles(response.data.articles);
            console.log("Fetched and set articles to", response.data.articles);
        } catch (err) {
            console.error("Error whilst fetching news", err);
        }
    };

    useEffect(() => {
        // noinspection JSIgnoredPromiseFromCall
        fetchNews();
    }, [page, limit]);

    return (
        <div className={"flex flex-col w-full px-8 py-4 justify-center items-center"}>
            <div className={"grid grid-cols-3 gap-4 mb-4"}>
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article}/>
                ))}
            </div>
            <Button variant={"secondary"} onClick={() => fetchNews()}>Start fetchin'</Button>
        </div>
    );
}