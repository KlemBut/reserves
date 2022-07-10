import {createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice ({
    name: "user",
    initialState: {
        value: {
            user:[],
            loggedIn: ""
        }
    },
    reducers: {
        addUser: (state, action) => {
            state.value.user.push(action.payload)
        }, 
        login: (state, action) => {
            state.value.loggedIn = action.payload
        },
        updatePic: (state, action) => {
            const {index, photoUrl} = action.payload
            state.value.user[index].pic = photoUrl
            state.value.loggedIn.pic  = photoUrl
        }
    }
})

export const {addUser, login, updatePic} = userSlice.actions
export default userSlice.reducer