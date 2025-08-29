/**
 * Function for getting the next word in the array.
 * @param words - The array of words.
 * @returns A random selected word in the provided array of words.
 */
export const getRandomWord = (words: string[]): string => {
    return words[Math.floor(Math.random() * words.length)]
}
