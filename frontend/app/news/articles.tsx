import React, {useEffect, useState} from "react";

import Link from "next/link";

import axios from "axios";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Skeleton} from "@/components/ui/skeleton";

const uri = `${process.env.NEXT_PUBLIC_RENDER_BACKEND}/api/articles`;

export default function Articles() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(9);
    const [query, setQuery] = useState("");

    const [totalArticles, setTotalArticles] = useState(0);
    const [lastPage, setLastPage] = useState(1);

    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    /**
     * This function fetches news articles from the backend.
     * After fetching the articles, it sets the articles state to the fetched articles.
     */
    const fetchNews = async () => {
        setLoading(true);

        try {
            const response = await axios.get(uri, {params: {page, limit, query}});
            setArticles(response.data.articles);
            setTotalArticles(response.data.total);
            console.log("Fetched and set articles to", response.data.articles);
            console.log("Total articles are", response.data.total);
        } catch (err) {
            console.error("Error whilst fetching news", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, [page, limit]);

    useEffect(() => {
        updateLastPage();
    }, [totalArticles, limit]);

    /**
     * This function adds or removes from the current page variable.
     * @param add - The amount to add or remove from the current page.
     */
    const updatePage = (add: number) => {
        if (page + add > 0) {
            setPage(page + add);
        }
    }

    /**
     * This function updates the last page variable.
     */
    const updateLastPage = () => {
        const calculatedLastPage = Math.ceil(totalArticles / limit);
        console.log("Variables are currently", totalArticles, limit);

        setLastPage(calculatedLastPage);
        console.log("Updated last page to", calculatedLastPage);
    }

    /**
     * This function updates the limit of displayed articles per page.
     * @param limit - The new limit to set.
     */
    const updateLimit = (limit: number) => {
        setLimit(limit);
        updateLastPage();
    }

    /**
     * This function is called when the user searches for an article.
     * @param key - The key that was pressed.
     * @param keyword - The keyword that the user searched for.
     */
    const searchQuery = async ({key}: { key: string }) => {
        if (key === "Enter") {
            console.log("Searching for", query);
            await fetchNews();
        }
    };

    return (
        <div className={"flex flex-col w-full px-8 py-4 justify-center items-center"}>
            <div
                className={"flex flex-col tablet:flex-row gap-y-2 tablet:gap-y-0 tablet:gap-x-4 w-full mt-4 mb-8 items-center justify-center"}>
                <ArticleSearchbar searchQuery={searchQuery} setQuery={setQuery}/>
                <SelectLimit updateLimit={updateLimit}/>
            </div>
            <div className={"grid tablet:grid-cols-2 laptop:grid-cols-3 gap-4 mb-4"}>
                {loading
                    ? [...Array(limit)].map((_, index) => <ArticleCardSkeleton key={index}/>)
                    : articles.map((article, index) => (
                        <ArticleCard key={index} article={article}/>
                    ))
                }
            </div>
            <PaginationGroup page={page} updatePage={updatePage} lastPage={lastPage}/>
        </div>
    );
}

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
        <Card className={"relative flex h-[476px] w-72 flex-col"}>
            <CardHeader>
                <CardTitle className={"h-16 overflow-y-scroll"}>{article.title}</CardTitle>
            </CardHeader>
            <CardContent className={"w-full p-0 m-0"}>
                <LazyImage src={article.urlToImage} alt={article.title}/>
                <p className={"absolute bg-background-light p-2 top-52"}>{article.source.name}</p>
            </CardContent>
            <div className={"overflow-scroll h-64 p-4"}>
                <CardDescription>{article.description}</CardDescription>
            </div>
            <CardFooter className={"flex justify-center"}>
                <Link className={"mt-4"} href={article.url}>
                    <Button variant={"secondary"}>Read more</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

const ArticleCardSkeleton = () => {
    return (
        <div
            className={"rounded-xl pt-6 items-center gap-y-6 border bg-card text-card-foreground shadow relative flex h-[476px] w-72 flex-col"}>
            <Skeleton className={"w-60 h-20"}/>
            <Skeleton className={"w-64 h-32 "}/>
            <Skeleton className={"w-60 h-24 "}/>
            <Skeleton className={"w-32 h-10 "}/>
        </div>
    );
}

const LazyImage = ({src, alt}: { src: string; alt: string }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative h-36 w-full bg-background-light">
            {!loaded && <Skeleton className="absolute inset-0"/>}
            <img
                className={`h-36 w-full object-cover transition-opacity duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
                src={src || "https://source.unsplash.com/random"}
                alt={alt}
                onLoad={() => setLoaded(true)}
            />
        </div>
    );
};


const ArticleSearchbar = ({searchQuery, setQuery}: { searchQuery: Function, setQuery: Function }) => {
    return (
        <Input
            onChange={(event) => setQuery(event.currentTarget.value)}
            onKeyDown={(event) => searchQuery({key: event.key, keyword: event.currentTarget.value})}
            placeholder={"Search for an article..."}
        />
    );
}

const SelectLimit = ({updateLimit}: { updateLimit: Function }) => {
    return (
        <Select onValueChange={value => updateLimit(Number(value))}>
            <SelectTrigger className="w-full tablet:w-max gap-x-2 px-2">
                <SelectValue placeholder="Change articles per page"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="6">6</SelectItem>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="21">21</SelectItem>
            </SelectContent>
        </Select>
    );
}

const PaginationGroup = ({page, updatePage, lastPage}: {
    page: number,
    updatePage: Function,
    lastPage: number
}) => {
    const isPreviousDisabled = page <= 1;
    const isNextDisabled = page >= lastPage;

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => updatePage(-1)}
                        className={isPreviousDisabled ? "opacity-50 cursor-not-allowed" : ""}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink className={"bg-background-light"}>{page}</PaginationLink>
                    {page + 1 <= lastPage && <PaginationLink onClick={() => updatePage(+1)}>{page + 1}</PaginationLink>}
                    {page + 2 <= lastPage && <PaginationLink onClick={() => updatePage(+2)}>{page + 2}</PaginationLink>}
                    {page + 3 <= lastPage && <PaginationLink onClick={() => updatePage(+3)}>{page + 3}</PaginationLink>}
                    {page + 4 <= lastPage && <PaginationLink onClick={() => updatePage(+4)}>{page + 4}</PaginationLink>}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        onClick={() => updatePage(1)}
                        className={isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}