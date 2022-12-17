export const ADD_PJ_FAV = "ADD_PJ_FAV";
export const DELETE_PJ_FAV = "DELETE_PJ_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER"

export function addPJFav (pj) {
    return (
        {
            type: ADD_PJ_FAV,
            payload: pj
        }
    )
}

export function deletePJFav (id) {
    return (
        {
            type: DELETE_PJ_FAV,
            payload: id
        }
    )
}

export function filterCards (gender) {
    return (
        {
            type: FILTER,
            payload: gender
        }
    )
}

export function orderCards (order) {
    return (
        {
            type: ORDER,
            payload: order
        }
    )
}