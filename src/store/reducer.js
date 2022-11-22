import { SET_USER_SESSION, SET_FLIGHT_ONEWAY, SET_FLIGHT_RETURN, SWITCH_LOCATIONS } from './constants';
import { format } from 'date-fns';

const initState = {
    loggedIn: false,
    oneWayPanel: {
        name: 'One Way Flight',
        source: {
            id: '',
            name: '',
        },
        destination: {
            id: '',
            name: '',
        },
        departureDate: format(new Date(), 'dd/MM/yyyy'),
        passengers: {
            adult: 1,
            child: 0,
            babies: 0,
        },
    },
    returnPanel: {
        name: 'Return Flight',
        source: {
            id: '',
            name: '',
        },
        destination: {
            id: '',
            name: '',
        },
        date: {
            startDate: format(new Date(), 'dd/MM/yyyy'),
            endDate: format(new Date(), 'dd/MM/yyyy'),
        },
        passengers: {
            adult: 1,
            child: 0,
            babies: 0,
        },
    },
};

function reducer(state, action) {
    switch (action.type) {
        case SET_USER_SESSION:
            return {
                ...state,
                loggedIn: action.payload,
            };
        case SET_FLIGHT_ONEWAY:
            let newOneWayState = { ...state };
            switch (action.payload.key) {
                case 'departureDate':
                    newOneWayState.oneWayPanel[action.payload.key] = action.payload.value;
                    break;
                case 'source':
                case 'destination':
                case 'passengers':
                    newOneWayState.oneWayPanel[action.payload.key] = {
                        ...action.payload.value,
                    };
                    break;
                default:
                    console.error('Invalid type of actions: ' + SET_FLIGHT_ONEWAY);
                    break;
            }
            return newOneWayState;
        case SET_FLIGHT_RETURN:
            let newReturnState = { ...state };

            switch (action.payload.key) {
                case 'source':
                case 'destination':
                case 'date':
                case 'passengers':
                    newReturnState.returnPanel[action.payload.key] = {
                        ...action.payload.value,
                    };
                    break;
                default:
                    console.error('Invalid type of actions: ' + SET_FLIGHT_RETURN);
                    break;
            }

            return newReturnState;
        case SWITCH_LOCATIONS:
            let newState = { ...state };
            let temp = newState[action.payload].destination;
            newState[action.payload].destination = newState[action.payload].source;
            newState[action.payload].source = temp;
            console.log(newState[action.payload].source);
            return newState;
        default:
            throw new Error('Invalid actions...');
    }
}

export { initState };
export default reducer;
