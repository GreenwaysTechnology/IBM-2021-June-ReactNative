import { createStore, combineReducers } from 'redux';
import { IncrementReducer, DecrementReducer } from './reducers'

//coimbineReduces is function which groups all reducers into one.
// coimbineReducer takes literal obejct as parameter -  configuration: reduceration
// {key:value}
// const appReducer = combineReducers({
//     inc: IncrementReducer,
//     dec: DecrementReducer
// });
// const appReducer = combineReducers({
//     IncrementReducer: IncrementReducer,
//     IncrementReducer: DecrementReducer
// });

const appReducer = combineReducers({
    IncrementReducer, DecrementReducer
});


export const appStore = createStore(appReducer)