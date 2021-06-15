import { DECREMENT } from '../actionconstants';

export const DecrementReducer = (state = { decvalue: 10 }, action) => {
    switch (action.type) {
        case DECREMENT:
            return Object.assign({}, state, { decvalue: state.decvalue - 1 })
        default:
            return state;
    }
}