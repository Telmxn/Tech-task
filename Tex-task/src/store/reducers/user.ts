import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userThunk";
import { IUser } from "../../types/user";

const initialState = {
  users: [] as IUser[],
  status: "nothing",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "fullfilled";
      })
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.users = [];
        state.status = "error";
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
