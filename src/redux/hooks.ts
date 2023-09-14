import { ThunkDispatch } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { RootState } from './store';

export const useAppDispatch = () => useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;