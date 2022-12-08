export const ADD_PJ_FAV = "";
export const DELETE_PJ_FAV = "DELETE_PJ_FAV";
export const FILTER = "FILTER";

export function addPJFav (status) {
    return (
        {
            type: ADD_PJ_FAV,
            payload: status.id
        }
    )
}

export function deletePJFav (status) {
    return (
        {
            type: DELETE_PJ_FAV,
            payload: status.id
        }
    )
}

export function filterCards (status) {
    return (
        {
            type: FILTER,
            payload: status.gender
        }
    )
}