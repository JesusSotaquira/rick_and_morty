import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from './action-types';


const initialState = {
    myFavorites: [],
    allCharacters: []
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            
            if (state.myFavorites.some(char => char.id === action.payload.id)) {
                return state; 
            }
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };

        case REMOVE_FAV:
            const idToRemove = Number(action.payload);
            const updatedFavorites = state.myFavorites.filter(character => character.id !== idToRemove);
            return {
                ...state,
                myFavorites: updatedFavorites
            };

        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload )
            return{
                ...state,
                myFavorites: allCharactersFiltered
            }

        case ORDER:
            const allCharactersOrder = [...state.allCharacters]
            return{
                ...state,
                myFavorites: 
                    action.payload === 'A' 
                    ? allCharactersOrder.sort((a,b) => a.id - b.id)
                    : allCharactersOrder.sort((a,b) => b.id - a.id)
            }

        default:
            return state;
    }
}

export default myReducer;
