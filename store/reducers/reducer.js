import actionType from "../constants/constants";

const initialState = {
    Deals: '',
    Order: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ORDER':
            state = {
                ...state,
                Order: [...state.Order,action.payload]
            }
            break;
        case 'GETDATA':
            state = {
                ...state,
                Deals: action.payload
            }
        default:
            break;
    }
    return state;
};