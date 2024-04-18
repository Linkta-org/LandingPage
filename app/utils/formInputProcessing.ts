export const cleanInput = (input: string | null | undefined): string => {
    return input ? input.replace(/\s+/g, ' ').trim() : '';
};

export const parseCommaSeparatedInput = (input: string | null | undefined): string[] => {
    return input ? input.split(',').map(item => item.trim()) : [];
};

export const cleanArray = (array: string[]): string[] => {
    return array.length ? array.filter(item => item.length > 0) :[];
};

export const parseAndCleanInput = (input: string | null | undefined): string[] => {
    const parsedInput = parseCommaSeparatedInput(input);
    return cleanArray(parsedInput.map(item => cleanInput(item)));
};
