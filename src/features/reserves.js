import {createSlice} from '@reduxjs/toolkit'

export const reserveSlice = createSlice ({
    name: "reserve",
    initialState: {
        value: {
            days: []
        }
    },
    reducers: {
       addDay: (state, action) => {
        state.value.days.push(action.payload)
       },
       removeDay: (state, action) => {
        const newArr = state.value.days.filter(x => x.calendar !== action.payload)
        state.value.days = newArr
       }
    }
})

export const {addDay, removeDay} = reserveSlice.actions
export default reserveSlice.reducer