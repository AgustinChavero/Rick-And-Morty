import { addPJFav, deletePJFav, filterCards } from "./actions";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case addPJFav : return {
            ...state.allCharacters,
            state: action
        }
        case deletePJFav : return {
            ...state,
            myFavorites: state.myFavorites.filter((e) => e.id !== action.payload)
        }
        case filterCards : return {
            ...state,

        }
        default: return state;
    }
};

export default reducer;