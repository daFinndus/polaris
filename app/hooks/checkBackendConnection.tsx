import axios, { AxiosPromise } from "axios"

/**
 * This function checks the connection to the backend API.
 * To be fast enough it will only ping the backend not retrieving any more data.
 * @returns A boolean which is true on established backend connection.
 */
export const checkBackendConnection = async (): Promise<boolean> => {
    const uri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/backend`

    let response = null

    try {
        response = await axios.get(uri)
        return true
    } catch (err) {
        return false
    }
}
