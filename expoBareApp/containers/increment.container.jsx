import { connect } from 'react-redux'
import { Increment } from '../components/increment';
// //mapper 
// function mapStateToProp(appState) {
//     //just refer appState.reducer
//     const state = appState.IncrementReducer;
//     console.log('mapper state')
//     console.log(state)
//     return {
//         inc: state
//     };
// }

//const mapStateToProp = appState => ({ inc: appState.IncrementReducer })

export const IncrementContainer = connect(appState => ({ inc: appState.IncrementReducer }))(Increment)



