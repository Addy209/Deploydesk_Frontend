import {combineReducers} from '@reduxjs/toolkit'
import datareducer from './reducer'

const rootReducer=combineReducers({
data:datareducer
})

export default rootReducer