import {
    SET_USER_SESSION,
    SET_SEARCH_PRODUCT_FORM,
    SET_FILTER_FORM,
    SET_FLIGHT_ONEWAY,
    SET_FLIGHT_RETURN,
    SWITCH_LOCATIONS,
} from './constants';

export const setUserSession = (...payload) => {
    return {
        type: SET_USER_SESSION,
        payload,
    };
};

export const setSearchProductForm = (key, value) => {
    return {
        type: SET_SEARCH_PRODUCT_FORM,
        payload: {
            key,
            value,
        },
    };
};

export const setFilterForm = (key, value) => {
    return {
        type: SET_FILTER_FORM,
        payload: {
            key,
            value,
        },
    };
};

export const setFlightOneWay = (payload) => {
    return {
        type: SET_FLIGHT_ONEWAY,
        payload,
    };
};

export const setFlightReturn = (payload) => {
    return {
        type: SET_FLIGHT_RETURN,
        payload,
    };
};

export const switchLocations = (payload) => {
    return {
        type: SWITCH_LOCATIONS,
        payload,
    };
};
