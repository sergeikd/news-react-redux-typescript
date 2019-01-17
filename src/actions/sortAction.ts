type SetSortDirection = (asc: boolean) => {
    type: string;
    asc: boolean;
};

export const setSortDirection: SetSortDirection = (asc) => {
    return {
        type: "SET_SORT_DIRECTION",
        asc,
    };
};