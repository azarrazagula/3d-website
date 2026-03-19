import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedPlanet: null,
  hoveredPlanet: null,
  isCardOpen: false,
  cameraTarget: { x: 0, y: 0, z: 0 },
  isAutoRotate: true,
};

const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    selectPlanet: (state, action) => {
      state.selectedPlanet = action.payload;
      state.isCardOpen = !!action.payload;
      if (action.payload) {
        state.isAutoRotate = false;
      }
    },
    hoverPlanet: (state, action) => {
      state.hoveredPlanet = action.payload;
    },
    clearSelection: (state) => {
      state.selectedPlanet = null;
      state.isCardOpen = false;
      state.isAutoRotate = true;
      state.cameraTarget = { x: 0, y: 0, z: 0 };
    },
    setCameraTarget: (state, action) => {
      state.cameraTarget = action.payload;
    },
    toggleAutoRotate: (state) => {
      state.isAutoRotate = !state.isAutoRotate;
    },
  },
});

export const { selectPlanet, hoverPlanet, clearSelection, setCameraTarget, toggleAutoRotate } = planetSlice.actions;
export default planetSlice.reducer;
