import {FETCH_WEATHER} from '../actions'

export default function todos(state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:

            return [
                action.payload.data, ...state
            ];
            break;
    }

    return state;
}
