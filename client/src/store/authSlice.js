import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        // userLogout: (state) => {
        //     state.user = null;
        //     localStorage.removeItem("user");
        // }
    }
})

export const {setAdmin,adminLogout,setUser,userLogout} = authSlice.actions

export default authSlice.reducer;