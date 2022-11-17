import { RootState } from './../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export type contactFormSlice = {
  status: SendFormStatus | null;
  showForm: boolean;
};

export type formData = {
  name: string;
  phone: string;
};

export enum SendFormStatus {
  UPLOADING = 'Is sending',
  SUCCESS = 'Has been sent',
  ERROR = "Didn't sent",
}

const initialState: contactFormSlice = {
  status: null,
  showForm: false,
};

export const sendForm = createAsyncThunk<formData, formData>(
  'contactForm/sendFormStatus',
  async ({ name, phone }) => {
    const { data } = await axios.post(
      'https://636c22467f47ef51e142ed99.mockapi.io/customer_requests',
      {
        name,
        phone,
        createdAt: new Date(),
      },
    );
    return data;
  },
);

const contactFormSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    setShowForm(state) {
      state.showForm = !state.showForm;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendForm.pending, (state) => {
      state.status = SendFormStatus.UPLOADING;
    });
    builder.addCase(sendForm.fulfilled, (state) => {
      state.status = SendFormStatus.SUCCESS;
      state.showForm = false;
    });
    builder.addCase(sendForm.rejected, (state, action) => {
      console.error(action.error);
      state.status = SendFormStatus.ERROR;
    });
  },
});

export const formSelector = (state: RootState) => state.contactFormSlice;

export const { setShowForm } = contactFormSlice.actions;
export default contactFormSlice.reducer;
