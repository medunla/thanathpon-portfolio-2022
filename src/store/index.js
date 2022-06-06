import { configureStore } from '@reduxjs/toolkit';
import portfolioDetail from './portfolioDetail/portfolioDetailSlice';

export default configureStore({
	reducer: {
		portfolioDetail,
	},
});