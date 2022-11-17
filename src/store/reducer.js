import { SET_USER_SESSION } from './constants';

const initState = {
    loggedIn: false,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                loggedIn: action.payload,
            };
        default:
            throw new Error('Invalid actions...');
    }
}

export { initState };
export default reducer;
