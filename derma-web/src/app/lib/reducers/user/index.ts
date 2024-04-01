"use client";

import { API_ROUTES } from "@/utils/routes/api-routes";
import { createSlice } from "@reduxjs/toolkit";

type PaginationType = {
  page: number;
  pageSize: number;
  total: number;
};

export interface UserCustomSectionsState {
  customSection: any;
  customFields: any;
  allUser: [],
  userCustomSectionsPagination: PaginationType;
  userCustomFieldsPagination: PaginationType;
}

const initialState: UserCustomSectionsState = {
  customSection: [],
  customFields: [],
  allUser: [],
  userCustomSectionsPagination: {
    page: 1,
    pageSize: 10,
    total: 0,
  },

  userCustomFieldsPagination: {
    page: 1,
    pageSize: 10,
    total: 0,
  },
};

export const UserCustomSectionsSlice = createSlice({
  name: "userCustomSections",
  initialState,
  reducers: {
    customSection: (state, action) => {
      state.customSection = [];
      const customSections = action.payload;
      const sortedArray = customSections.sort((a: any, b: any) => a.weight - b.weight);
      state.customSection = [...sortedArray];
    },
    customFields: (state, action) => {
      state.customFields = [...action.payload];
    },
    setAllUsersData: (state, action) => {
      state.allUser = action.payload;
    },
    updateCustomSection: (state, action) => {
      state.customSection = [...state.customSection, ...action.payload];
    },
    addCustomFieldToCustomSection: (state, action) => {
      state.customSection = [...state.customSection, ...action.payload];
    },
    updateCustomFields: (state, action) => {
      state.customFields = [...state.customFields, ...action.payload];
    },
    updateUserCustomSectionsPagination: (state, action) => {
      state.userCustomSectionsPagination = action.payload;
    },
    updateUserCustomSectionsTotal: (state, action) => {
      state.userCustomSectionsPagination.total = action.payload;
    },
    updateUserCustomFieldsPaginationPagination: (state, action) => {
      state.userCustomFieldsPagination = action.payload;
    },
    updateUserCustomFieldsTotal: (state, action) => {
      state.userCustomFieldsPagination.total = action.payload;
    },
  },
});

export const {
  customSection,
  customFields,
  updateCustomSection,
  setAllUsersData,
  updateCustomFields,
  updateUserCustomSectionsPagination,
  updateUserCustomSectionsTotal,
  updateUserCustomFieldsPaginationPagination,
  updateUserCustomFieldsTotal,
  addCustomFieldToCustomSection,
} = UserCustomSectionsSlice.actions;

export default UserCustomSectionsSlice.reducer;
