import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1';

interface IProductData {
  data: object[];
}

export const categories = createAsyncThunk<IProductData>(
  'products',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProductData>('/categories');
      
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const productsByName = createAsyncThunk<IProductData, string>(
  'productsByName',
  async (name, { rejectWithValue }) => {
    try {
      const response = await axios.get<IProductData>(`/products/?title=${name}`);
      console.log(response.data);
      
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
