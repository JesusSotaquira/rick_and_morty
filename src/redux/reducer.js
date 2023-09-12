import { ADD_FAV, REMOVE_FAV } from './actions';

const initialState = {
    myFavorites: []
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            };

        case REMOVE_FAV:
            const idToRemove = Number(action.payload);
            const updatedFavorites = state.myFavorites.filter(character => character.id !== idToRemove);
            return {
                ...state,
                myFavorites: updatedFavorites
            };

        default:
            return state;
    }
}

export default myReducer;
