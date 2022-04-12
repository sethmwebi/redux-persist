import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import CartReducer from "./feature/cartSlice"
import { combineReducers } from "redux"

const persistConfig = {
	key: "root",
	version: 1,
	storage
}

const reducer = combineReducers({
	cart: CartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
	reducer: persistedReducer
})

export default store;