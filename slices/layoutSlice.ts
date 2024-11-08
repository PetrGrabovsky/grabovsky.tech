import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
  isMobileNavOpen: boolean;
}

const initialState: LayoutState = {
  isMobileNavOpen: false,
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleMobileNav: (state) => {
      state.isMobileNavOpen = !state.isMobileNavOpen;
    },
  },
});

export const { toggleMobileNav } = layoutSlice.actions;

export default layoutSlice.reducer;
