
/**
 * 
 * @param str string
 * @param max number
 * @returns an excerpted string if str exceeds max char limit
 */
export const excerpt = (str: string, max: number) => {
    if (str?.length > max) {
        return `${str?.substring(0, max)}...`;
    }

    return str;
}