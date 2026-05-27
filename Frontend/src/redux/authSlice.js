import { createSlice } from "@reduxjs/toolkit";

const loadUser = () => {
  try {
    const raw = localStorage.getItem("pinrest_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: { user: loadUser() },
 reducers: {
  login: (state, action) => {
    state.user = {
      ...action.payload,

      profileImage:
        action.payload.profileImage ||
        "https://i.pinimg.com/736x/f4/b1/24/f4b1248ac324d9139123cc22e0dc7eb3.jpg",
    };

    localStorage.setItem(
      "pinrest_user",
      JSON.stringify(state.user)
    );
  },

  signup: (state, action) => {
    state.user = {
      ...action.payload,

      profileImage:
        action.payload.profileImage ||
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    };

    localStorage.setItem(
      "pinrest_user",
      JSON.stringify(state.user)
    );
  },

  logout: (state) => {
    state.user = null;

    localStorage.removeItem("pinrest_user");
  },

  updateProfileImage: (state, action) => {
    state.user.profileImage = action.payload;

    localStorage.setItem(
      "pinrest_user",
      JSON.stringify(state.user)
    );
  },
},
});

export const {
  login,
  signup,
  logout,
  updateProfileImage,
} = authSlice.actions;
export default authSlice.reducer;