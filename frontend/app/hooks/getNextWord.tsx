/**
 * Function for getting the next word in the array.
 * @param words - The array of words.
 * @param word - The current word.
 */
export const getNextWord = (words: string[], word: string): string => {
    const currentIndex = words.indexOf(word);
    const nextIndex = (currentIndex + 1) % words.length;

    return words[nextIndex];
}
