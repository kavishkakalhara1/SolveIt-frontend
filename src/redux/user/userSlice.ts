import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: any;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<any>)=> {
      state.user = action.payload;
      state.loading = false;
          },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // updateStart: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // updateSuccess: (state, action) => {
    //   state.currentUser = action.payload;
    //   state.loading = false;
    //   state.error = null;
    // },
    // updateFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // deleteUserStart: (state) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // deleteUserSuccess: (state) => {
    //   state.currentUser = null;
    //   state.loading = false;
    //   state.error = null;
    // },
    // deleteUserFailure: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // signoutSuccess: (state) => {
    //   state.currentUser = null;
    //   state.error = null;
    //   state.loading = false;
    // },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  // updateStart,
  // updateSuccess,
  // updateFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  // deleteUserFailure,
  // signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;