import { createSlice,PayloadAction } from '@reduxjs/toolkit';


const initialState ={ isLogin : false};


const authSlice = createSlice({name:'auth',
initialState,reducers:{

    //define reducers here 
    login:(state,action) =>{
        state.isLogin=true;
    },
    logout:(state,action) =>{
        state.isLogin=false;
    }
    

    
}});

export const actions =  authSlice.actions;
export default  authSlice.reducer;


