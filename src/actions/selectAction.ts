type SetSelection = (input: string) => {
    type: string;
    select: string;
};

export const setSelection: SetSelection = (select) => {
    return {
        type: "SET_SELECTION",
        select,
    };
};