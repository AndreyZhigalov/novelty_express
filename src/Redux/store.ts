import { configureStore } from "@reduxjs/toolkit"
import contactFormSlice from "./slices/contactFormSlice"
import headerInputsSlice from './slices/headerSlice';
import notificationCardSlice from "./slices/notificationCardSlice";

const store = configureStore({
  reducer: {
    contactFormSlice,
    notificationCardSlice,
    headerInputsSlice,
  },
});

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch