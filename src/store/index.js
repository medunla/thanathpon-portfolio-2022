import { configureStore } from '@reduxjs/toolkit';
import portfolios from './portfolios/portfoliosSlice';
import portfolioDetail from './portfolioDetail/portfolioDetailSlice';

export default configureStore({
	reducer: {
		portfolios,
		portfolioDetail,
	},
});