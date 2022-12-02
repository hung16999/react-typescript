import { createSlice } from '@reduxjs/toolkit'

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

interface State {
  posts: Post[] | null
}

const initialState: State = {
  posts: null,
}

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    getPosts: () => {},
    getPostsSuccess: () => {},
    clearPosts: () => {},
  },
})

export const { getPosts, getPostsSuccess, clearPosts } = postSlice.actions
export default postSlice.reducer
