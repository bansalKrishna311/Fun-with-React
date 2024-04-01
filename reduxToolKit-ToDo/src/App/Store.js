import{ConfigureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/todo/todoSlice';

export const store = ConfigureStore({
    reducer: todoReducer
})













// step 1 import configure store from redux toolkit
// step 2 export configure store 