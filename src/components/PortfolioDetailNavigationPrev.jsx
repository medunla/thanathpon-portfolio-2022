import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioDetailNavigationPrev = (props) => {
	if (props.to) {
		return <Link to={`/portfolios/${props.to}`}><i className="icon-long-arrow-left"></i> <span>Previous Project</span></Link>
	}
	return '';
};

export default PortfolioDetailNavigationPrev;