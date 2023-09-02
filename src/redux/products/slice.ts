import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from './operations';

export interface IProductData {
  id: number;
  name: string;
  creationAt: string;
  updatedAt: string;
}


export type categoryState = {
   categories: IProductData[]
}

const initialState: categoryState = {
  categories: []
};

const categorySlice = createSlice({
  name: 'userDaily',
  initialState,
  reducers: {
    addCase(state, action: PayloadAction<[]>) {
      state.categories = action.payload
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchDaily.fulfilled, (state, action) => {
    //   const notAllowedProducts = action.payload.notAllowedProducts;
    //   state.dailyRate = action.payload.dailyRate;
    //   state.notAllowedProducts = notAllowedProducts;
    // });
    builder.addCase(products.fulfilled, (state, action) => {
      // @ts-ignore
      state.categories = action.payload
      // state.categories = action.payload as Draft<IProductData>[];

    });
    // [products.fulfilled]: (state, action) => {
    //   state.categories = action.payload;
    // }
  },
});

export const {addCase} = categorySlice.actions

export default categorySlice.reducer;

