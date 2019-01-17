type SetSearch = (input: string) => {
    type: string;
    input: string;
};

export const setSearch: SetSearch = (input) => {
    return {
        type: "SET_SEARCH",
        input,
    };
};