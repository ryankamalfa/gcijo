export const FETCH_CATALOUGES_SUCCESS = "FETCH_CATALOUGES_SUCCESS";

const fetchCatalougesSuccess = catalouges => ({
    type: FETCH_CATALOUGES_SUCCESS,
    payload: catalouges
});

// fetch catalouges
export const fetchCatalouges = catalouges => {
    return dispatch => {
        dispatch(fetchCatalougesSuccess(catalouges));
    };
};
