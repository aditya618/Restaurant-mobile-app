import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restuarant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null
  }
}

export const resturantSlice = createSlice({
  name: 'restuarant',
  initialState,
  reducers: {
    setRestuarant: (state, action) => {
        state.restuarant = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRestuarant } = resturantSlice.actions;

export const selectRestuarant = (state) => state.restuarant.restuarant;


export default resturantSlice.reducer;