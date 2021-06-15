import { INCREMENT } from '../actionconstants';

export const IncrementReducer = (state = { incvalue: 10 }, action)=>{
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, { incvalue: state.incvalue + 1 })
        default :
             return state;
    }
}