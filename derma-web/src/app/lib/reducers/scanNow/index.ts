import { diseaseSymptoms } from '@/app/scannow/staticData';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScanNowState {
    success: boolean;
    loading: boolean;
    error: string | null;
    result: string | null;
    symptoms: string|null;
    additionalInfo: string|null;
    imageName: string|null;
    imageUrl: string|null;
    type: string|null;
    response:any
    selectionChips:any
}


const initialState: ScanNowState = {
    success: false,
    loading: false,
    error: null,
    result: null,
    symptoms: null,
    additionalInfo:null,
    imageName:null,
    imageUrl:null,
    type:"disease",
    response:{},
    selectionChips:diseaseSymptoms,
};

export const scanNowSlice = createSlice({
    name: 'scanNow',
    initialState,
    reducers: {
        startScan: (state) => {
            state.loading = true;
            state.error = null;
            state.result = null;
            state.success = false;
        },
        setAdditionalInfo:(state,action: PayloadAction<string>)=>{
            state.additionalInfo=action.payload;

        },
        setReqSymptoms:(state,action: PayloadAction<string>)=>{
            state.symptoms=action.payload;

        },
        setImageName:(state,action: PayloadAction<string>)=>{
            state.imageName=action.payload;

        },
        setImageUrl:(state,action: PayloadAction<string>)=>{
            state.imageUrl=action.payload;

        },
        setScanType:(state,action: PayloadAction<string>)=>{
            state.type=action.payload;

        },
        setResponse:(state,action: PayloadAction<any>)=>{
            state.response=action.payload;
            state.success = true;
        },
        setSelectionChips:(state,action: PayloadAction<any>)=>{
            state.selectionChips=action.payload;
        },

        
        
       
        scanSuccess: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.result = action.payload;
        },
        scanFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { startScan, scanSuccess, scanFailure,setReqSymptoms,setAdditionalInfo,setImageName,setImageUrl,setScanType,setResponse,setSelectionChips} = scanNowSlice.actions;

