import { createSlice } from '@reduxjs/toolkit';
import portfolios from '../../assets/data/portfolios';

export const portfoliosSlice = createSlice({
	name: 'portfolios',
	initialState: {
		list: portfolios,
	},
	reducers: {
		getPortfoliosByTypes: (state, action) => {
			if (action.payload) {
				const types = action.payload;
				state.list = portfolios.filter((portfolio) => types.includes(portfolio.type));
			} else {
				state.list = portfolios;
			}
		},
	},
});

export const { getPortfoliosByTypes } = portfoliosSlice.actions;

export default portfoliosSlice.reducer;