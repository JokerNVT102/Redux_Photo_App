const { createSlice } = require("@reduxjs/toolkit");

const photo = createSlice({
  name: "photo",
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      //    const newPhoto = action.payload;
      //    state.push(newPhoto);
      //hoac
      state.push(action.payload);
    },
  },
});
const { reducer, actions } = photo;
export const { addPhoto } = actions;
export default reducer;
