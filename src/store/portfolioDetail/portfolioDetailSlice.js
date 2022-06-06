import { createSlice } from '@reduxjs/toolkit';
import portfolios from '../../assets/data/portfolios';

export const portfolioDetailSlice = createSlice({
	name: 'portfolioDetail',
	initialState: {
		data: null,
	},
	reducers: {
		getPortfolio: (state, action) => {
			const slug = action.payload;
			const portfolio = portfolios.find((item) => item.slug === slug);
			state.data = portfolio ?? null;
		},
	},
});

export const { getPortfolio } = portfolioDetailSlice.actions;

export default portfolioDetailSlice.reducer;