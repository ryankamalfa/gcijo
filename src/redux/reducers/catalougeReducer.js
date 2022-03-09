import { FETCH_CATALOUGES_SUCCESS } from "../actions/catalougeActions";

const initState = [];

const catalougeReducer = (state = initState, action) => {
    if (action.type === FETCH_CATALOUGES_SUCCESS) {
        state = action.payload.slice(0);
        return state;
    }

    return state;
};

export default catalougeReducer;
