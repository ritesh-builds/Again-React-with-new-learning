import {configureStore} from '@reduxjs/toolkit'
import SearchSlice from './features/SearchSlice'
import searchReducer from './features/SearchSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer
    }
})

