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
            console.log(payload, "payloaddd===")
            state.isLoggedIn = true,
                state.token = payload.data.token,
                state.user = payload.data.user
            console.log(state.token, "token")
        },
        logout: (state) => {
            state.isLoggedIn = false,
                state.token = '',
                state.user = null
        },
        createUser: (state, { payload }) => {
            state.user = { ...payload };
        }
    }
})
export const { login, logout, createUser } = userSlice.actions;
export default userSlice.reducer;