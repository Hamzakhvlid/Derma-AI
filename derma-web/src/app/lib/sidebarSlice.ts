import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeItem: 'Dashboard', 
};

const activeSidebarSlice = createSlice({
  name: 'activeSidebar',
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = activeSidebarSlice.actions;
export default activeSidebarSlice.reducer;
