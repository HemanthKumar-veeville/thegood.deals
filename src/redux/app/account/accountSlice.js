import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../helpers/helperMethods";

// Initial state for account
const initialState = {
  profile: null,
  language: null,
  currency: null,
  notifications: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Async thunk for fetching user profile
export const fetchUserProfile = createAsyncThunk(
  "account/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/account/profile");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for updating user profile with FormData
export const updateUserProfile = createAsyncThunk(
  "account/updateUserProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      // Create a new FormData object
      const formData = new FormData();
      // Append the profile data to the FormData object
      for (const key in profileData) {
        if (profileData.hasOwnProperty(key)) {
          formData.append(key, profileData[key]);
        }
      }

      // Make the PUT request with the FormData
      const response = await axiosInstance.put("/account/profile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching language setting
export const fetchLanguageSetting = createAsyncThunk(
  "account/fetchLanguageSetting",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/account/language");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for updating language setting
export const updateLanguageSetting = createAsyncThunk(
  "account/updateLanguageSetting",
  async (language, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/account/language", {
        language,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching currency setting
export const fetchCurrencySetting = createAsyncThunk(
  "account/fetchCurrencySetting",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/account/currency");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for updating currency setting
export const updateCurrencySetting = createAsyncThunk(
  "account/updateCurrencySetting",
  async (currency, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/account/currency", {
        currency,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for fetching notification settings
export const fetchNotificationSettings = createAsyncThunk(
  "account/fetchNotificationSettings",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/account/notifications");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Async thunk for updating notification settings
export const updateNotificationSettings = createAsyncThunk(
  "account/updateNotificationSettings",
  async (notifications, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put("/account/notifications", {
        notifications,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// Account slice
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch user profile
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update user profile
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = { ...state.profile, ...action.payload };
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Fetch language setting
      .addCase(fetchLanguageSetting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLanguageSetting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.language = action.payload.user_settings.language;
      })
      .addCase(fetchLanguageSetting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update language setting
      .addCase(updateLanguageSetting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateLanguageSetting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.language = action.payload.user_settings.language;
      })
      .addCase(updateLanguageSetting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Fetch currency setting
      .addCase(fetchCurrencySetting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencySetting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currency =
          action.payload.user_settings.currency === "Usd" ? "USD" : "Euro";
      })
      .addCase(fetchCurrencySetting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update currency setting
      .addCase(updateCurrencySetting.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCurrencySetting.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currency = action.payload.currency;
      })
      .addCase(updateCurrencySetting.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Fetch notification settings
      .addCase(fetchNotificationSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNotificationSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload.user_settings;
      })
      .addCase(fetchNotificationSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Update notification settings
      .addCase(updateNotificationSettings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateNotificationSettings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.notifications = action.payload.notifications;
      })
      .addCase(updateNotificationSettings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default accountSlice.reducer;
