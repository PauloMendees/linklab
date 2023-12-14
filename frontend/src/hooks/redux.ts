import { StoreAppDispatch, StoreRootState } from '@/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => StoreAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreRootState> = useSelector;
