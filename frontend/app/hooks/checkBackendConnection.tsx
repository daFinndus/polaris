import axios from "axios";

/**
 * This function checks the connection to the backend API.
 * To be fast enough it will only ping the backend not retrieving any more data.
 */
export async function checkBackendConnection() {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend`;

    let response = null;

    try {
        response = await axios.get(uri);
    } catch (err) {
        return null;
    }

    return response;
}