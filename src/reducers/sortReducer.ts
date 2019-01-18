export type SortAction = {
    type: string;
    asc: boolean;
};

const initialState: {asc: boolean} = {
    asc: true,
};

type Sort = (state: {asc: boolean}, action: SortAction) => {
    asc: boolean,
};

export const sort: Sort = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SORT_DIRECTION":
            return {
                ...state,
                asc: action.asc,
            };
        case "NEWS_FETCH_SUCCESS":
            return { ...state, asc: true };
        default:
            return state;
    }
};