import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import postSlice from './slices/postSlice'

export const store = configureStore({
  reducer: { userSlice, postSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
