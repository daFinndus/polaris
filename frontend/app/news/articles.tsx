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
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import Marquee from "react-fast-marquee";

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
                className={"flex flex-col notebook:flex-row gap-y-2 notebook:gap-y-0 notebook:gap-x-4 w-full mt-4 mb-8 items-center justify-center"}>
                <ArticleSearchbar searchQuery={searchQuery} setQuery={setQuery}/>
                <SelectLimit updateLimit={updateLimit}/>
            </div>
            <div className={"grid gap-y-8 gap-x-4 notebook:grid-cols-2 laptop:grid-cols-3 gap-4"}>
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
    const formatDate = (isoDate: string) => {
        if (!isoDate) return "";

        const date = new Date(isoDate);

        let format;

        try {
            format = new Intl.DateTimeFormat('de-DE', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            }).format(date);
        } catch (err) {
            console.error("Error whilst formatting date", err);
        }

        return format || isoDate;
    };

    return (
        <CardContainer className="inter-var h-min p-0 m-0">
            <CardBody
                className="bg-background-light relative shadow-lg hover:shadow-xl group/card border-background-lighter rounded-xl px-4 border"
            >
                <CardItem translateZ={50} translateY={10}>
                    <CardHeader>
                        <CardTitle>
                            <Marquee className={"overflow-hidden"} gradient={false} speed={30} loop={0}>
                                <span className={"mx-2"}>{"📰"}</span>
                                <span>{article.title}</span>
                            </Marquee>
                        </CardTitle>
                    </CardHeader>
                </CardItem>
                <CardItem translateZ={100} translateY={10} className={"w-full"}>
                    <CardContent>
                        <LazyImage src={article.urlToImage} alt={article.title}/>
                        <p className={"absolute bg-background-light p-2 top-24 max-w-28 whitespace-nowrap font-bold text-sm overflow-hidden text-ellipsis"}>{article.source.name}</p>
                        <p className={"absolute bg-background-light p-2 top-24 right-4 font-bold text-sm"}>{formatDate(article.publishedAt)}</p>
                    </CardContent>
                </CardItem>
                <CardItem translateZ={50} className={"h-24 px-4 overflow-hidden text-ellipsis"}>
                    <CardDescription>
                        {article.description}
                    </CardDescription>
                </CardItem>
                <CardItem translateZ={50} className={"w-full h-fit flex justify-center"}>
                    <CardFooter className={"p-0 m-0"}>
                        <Link href={article.url}>
                            <Button variant={"secondary"}>Read more</Button>
                        </Link>
                    </CardFooter>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}

const ArticleCardSkeleton = () => {
    return (
        <CardContainer className="inter-var h-min p-0 m-0">
            <CardBody
                className="flex flex-col items-center bg-background-light shadow-lg hover:shadow-xl group/card border-background-lighter rounded-xl px-4 border">
                <CardItem translateZ={50} translateY={10} className={"w-fit mt-4 mb-6"}>
                    <Skeleton className="h-8 w-72"/>
                </CardItem>
                <CardItem translateZ={100} translateY={10} className={"w-fit mb-6"}>
                    <Skeleton className="h-28 w-72"/>
                </CardItem>
                <CardItem translateZ={50} className={"w-fit"}>
                    <Skeleton className="h-20 w-72"/>
                </CardItem>
                <CardItem translateZ={50} className={"w-fit flex justify-center mt-6"}>
                    <Skeleton className="h-8 w-24"/>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};

const LazyImage = ({src, alt}: { src: string; alt: string }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="relative h-36 w-full bg-background-lighter rounded-xl">
            {!loaded && <Skeleton className="absolute inset-0"/>}
            <img
                className={`h-36 w-full object-cover rounded-xl transition-opacity duration-500 
                ${
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
            <SelectTrigger className="w-full notebook:w-max gap-x-2 px-2">
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
        <Pagination className={"m-8"}>
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