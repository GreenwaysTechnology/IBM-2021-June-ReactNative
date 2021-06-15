import { Provider } from 'react-redux'
import React from 'react';
import { IncrementContainer } from './containers'
import { appStore } from './store'

const App = () => {
    return <Provider store={appStore}>
        <IncrementContainer />
    </Provider>
}
export default App;