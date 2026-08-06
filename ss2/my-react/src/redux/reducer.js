import {combineReducers} from "redux";


const initAccount = null;

const userReducer = (state =initAccount, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload;
        case "LOGOUT":
            return null;
        default :
            return state;
    }
}
const cartReducer = (state =[], action) => {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                action.payload
            ];
        case "REMOVE":
            return [];
        default :
            return state;
    }
}

export const rootReducer = combineReducers({
    user : userReducer,
    cart: cartReducer
})