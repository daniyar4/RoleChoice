import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  {createStore, applyMiddleware} from 'redux'
import reducer from './redux/reducer'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk'
import Navigator from './Components/Navigator'

const store = createStore(reducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigator /> 
    </Provider>
  )}
