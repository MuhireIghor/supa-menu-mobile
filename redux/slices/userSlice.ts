import { createSlice } from "@reduxjs/toolkit"

const initialState: {
    isLoggedIn: boolean,
    token: string,
    user: null | {
        username: string,
        email: string,
        roleName: string,
        id: string
    }
} = {
    isLoggedIn: false,
    token: '',
    user: {
        username: '',
        email: '',
        roleName: '',
        id: ''
    }


}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.isLoggedIn = true,
                state.token = payload.token,
                state.user = payload.user
        },
        logout: (state, { payload }) => {
            state.isLoggedIn = false,
                state.token = '',
                state.user = null
        }
    }
})
export const {login,logout} = userSlice.actions;
export default userSlice.reducer;