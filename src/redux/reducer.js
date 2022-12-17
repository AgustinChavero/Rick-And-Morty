import { ADD_PJ_FAV, DELETE_PJ_FAV, FILTER, ORDER } from "./actions";

const initialState = {
    favorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PJ_FAV : return {
            ...state,
            favorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
        }
        case DELETE_PJ_FAV : return {
            ...state,
            favorites: state.favorites.filter((e) => e.id !== action.payload),
            allCharacters: state.allCharacters.filter((e) => e.id !== action.payload)
        }
        case FILTER : return {
            ...state,
            favorites: state.allCharacters.filter((e) => e.gender === action.payload)
        }
        case ORDER : return {
            ...state,
            favorites: state.favorites.sort((a, b) => {
                if (action.payload === "ascendent") {
                    return a.id - b.id
                } else return b.id - a.id
            })
        }
        default: return state;
    }
};

export default reducer;