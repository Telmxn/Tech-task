import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSlice } from "../reducers/user";
import axios from "axios";
import { IUser } from "../../types/user";

export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("data/initData.json");
      return response.data as IUser[];
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi.");
    }
  }
);

export const userActions = userSlice.actions;
