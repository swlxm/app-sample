import { createSelector } from 'reselect';
import { IStoreState } from '../../app/types';

const homeSelector = (state: IStoreState) => state.home;

export const tokenSelector = createSelector(homeSelector, (state) => state.userLoginStatus.token);
export const isUserLoggedSelector = createSelector(homeSelector, (state) => state.userLoginStatus.logged);
export const loginErrorSelector = createSelector(homeSelector, (state) => state.userLoginStatus.loginError);

export const productsSelector = createSelector(homeSelector, (state) => state.products);
export const submitStatusSelector = createSelector(homeSelector, (state) => state.submitStatus);