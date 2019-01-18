export type SelectAction = {
    type: string;
    select: string;
};

const initialState: {select: string} = {
    select: "",
};

type Select = (state: {select: string}, action: SelectAction) => {
    select: string,
};

export const selection: Select = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTION":
            return {
                ...state,
                selected: action.select,
            };
        case "NEWS_FETCH_SUCCESS":
            return { ...state, selected: "" };
        default:
            return state;
    }
};