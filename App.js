import React from 'react';
import { createStore,combineReducers,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import PlacesNavigator from './src/navigation/PlacesNavigator'
import placesReducer from './src/Redux/config/reducer/places-reducer'
import { init } from './src/utils/data/db'
init().then(()=>{
  console.log('initialized database.')
}).catch((err)=>{
  console.log('initializing database failed.')
  console.log(err)
})
const rootReducer = combineReducers({
  places:placesReducer
})
const store = createStore(rootReducer,applyMiddleware(ReduxThunk))

export default function App() {
  return <Provider store={store}>
    <PlacesNavigator/>
  </Provider>
}


