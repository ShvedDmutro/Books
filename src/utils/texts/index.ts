export const cleanTitle = (str: string): string => {
    return str.replace(/[&\/\\#+()@$~%.:*?<>{}^]/g, '') // add more rools if needed
} 