import { configureStore } from '@reduxjs/toolkit'
import QuoteSlicer from '../slicer/QuoteSlicer'
export const store = configureStore({
  reducer: {QuoteSlicer},
})