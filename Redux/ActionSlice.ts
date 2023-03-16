import { createSlice } from '@reduxjs/toolkit'


const initialState = { 
    SideBar : false
}
export const Actionslice = createSlice({
    name: 'actionslice',
    initialState,
    reducers:{      
        SideBarEngin : (state , action) => {
            state.SideBar = action.payload
        }
    } 
})

export const  {    
    SideBarEngin
} = Actionslice.actions

export const  SideBarC = (state : any) => state.actionslice.SideBar

export default Actionslice.reducer;