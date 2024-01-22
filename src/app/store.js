import { configureStore, } from "@reduxjs/toolkit";

import userReducer from '../feature/userSlice';
import movieReducer from '../feature/moviesSlice'
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
 
});

