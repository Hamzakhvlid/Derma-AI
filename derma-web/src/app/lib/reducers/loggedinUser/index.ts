import { createSlice } from "@reduxjs/toolkit";

type ProfileProps = {
  _id?: string;
  first_name?: string;
  last_name?: string;
  status?: string;
  imageUrl?: string;
  image?: string;
  email?: string;
  username?: string;
  accessToken?: string;
  role?: string;
  scanCredits?: number;
  phoneNumber?: string;
  doctorId?: string;
};

type UserProps = {
  email?: string;
  uuid?: string;
};
export interface UserState {
  user: UserProps;
  profile: ProfileProps;
  roles: string[];
  isAdmin: boolean;
}

const initialState: UserState = {
  user: {},
  profile: {},
  roles: [],
  isAdmin: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },

    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    refreshUser: (state) => {
      state = initialState;
    },
  },
});

export const { setUser, setProfile, setIsAdmin, refreshUser } =
  userSlice.actions;

export default userSlice.reducer;
