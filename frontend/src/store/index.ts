import { headerReducer } from '@/components/shared/Header/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});

export type StoreRootState = ReturnType<typeof store.getState>;
export type StoreAppDispatch = typeof store.dispatch;
