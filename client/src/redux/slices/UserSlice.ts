import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
    name: string;
    email: string;
    role: string;
    _id: string;
}

type InitialState = {
    user : User | null;
}

const initialState : InitialState = {
    user: null
}

const UserReducer = createSlice({
    initialState,
    name: "user",
    reducers: {
        addUser:  (state, action: PayloadAction<User>) =>{
            state.user = action.payload;
        },
        removeUser : (state)=>{
            state.user = null;
        }
    }
})

export default UserReducer.reducer;
export const { addUser, removeUser } = UserReducer.actions;