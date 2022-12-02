import { createSlice } from '@reduxjs/toolkit'

interface State {
  userId: number | null
}

const initialState: State = {
  userId: null,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    getUser: () => {},
    getUserSuccess: () => {},
    clearUser: () => {},
  },
})

export const { getUser, getUserSuccess, clearUser } = userSlice.actions
export default userSlice.reducer
