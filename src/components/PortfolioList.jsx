import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPortfoliosByTypes } from '../store//portfolios/portfoliosSlice';
import PortfolioItem from './PortfolioItem';

const PortfolioList = (props) => {
	const portfolios = useSelector((state) => state.portfolios.list);
	const renderPortfolioItems = portfolios.map((portfolio) => <PortfolioItem key={portfolio.id} {...portfolio} />);

	const dispatch = useDispatch();
	const handleGetPortfolios = (types) => { dispatch(getPortfoliosByTypes(types)) };

	useEffect(() => {
		handleGetPortfolios(props.types);
	}, [props.types]);

	return (
		<div className="row animate-box col-lg-4-clear col-md-4-clear col-sm-6-clear col-xs-6-clear col-xxs-12-clear works-row" data-animate-effect="fadeInLeft">
			{ renderPortfolioItems }
		</div>
	)
}

export default PortfolioList