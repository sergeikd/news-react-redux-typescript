import { SelectAction } from "../reducers/selectReducer";

type SetSelection = (input: string) => SelectAction;

export const setSelection: SetSelection = (select) => {
    return {
        type: "SET_SELECTION",
        select,
    };
};