import axios from "axios";

const uri = `${process.env.NEXT_PUBLIC_RENDER_BACKEND}/api/articles`;

/**
 * This function fetches news from the backend.
 * @param page The page number to fetch.
 * @param limit The number of articles to fetch.
 * @returns The response from the backend.
 */
export const fetchNews = async (page: number, limit: number) => {
    const response = await axios.get(uri, {
        params: {
            page: page,
            limit: limit,
        }
    });

    console.log(response.data);
}