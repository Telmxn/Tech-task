/* eslint-disable @typescript-eslint/no-unsafe-return */
import { AnyAction, ThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/user";
import { RootState } from "..";
import { IUser } from "../../types/user";
import { userSlice } from "../reducers/user";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("data/initData.json");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi.");
    }
  }
);

export const userActions = userSlice.actions;

// export const getUsers = (): ThunkAction<
//   void,
//   RootState,
//   unknown,
//   AnyAction
// > => {
//   return async (dispatch, getState) => {
//     if (getState().users.users.length === 0) {
//       const response: IUser[] = await fetchUsers();
//       dispatch(userActions.);
//     }
//   };
// };
