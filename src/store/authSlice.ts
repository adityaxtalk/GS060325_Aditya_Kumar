import {createSlice} from "@reduxjs/toolkit";
import { localStorageUtil } from "../utils/localStorageUtil";
interface AuthState {
    userInfo: null | {email: string};
}

const initialState: AuthState = {
    userInfo: localStorageUtil.get<{ email: string }>("user"),
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state)=> {
            state.userInfo = null
            localStorageUtil.remove("user");
        },
        login: (state, action) => {
            state.userInfo=action.payload
            localStorageUtil.set("user", action.payload)
        }
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;