import React from 'react';
import { Link } from 'react-router-dom';
import { route } from '../enums/route';
import PortfolioDetailNavigationPrev from './PortfolioDetailNavigationPrev';
import PortfolioDetailNavigationNext from './PortfolioDetailNavigationNext';

const PortfolioDetailNavigation = (props) => {
	return (
		<div className="row work-pagination animate-box" data-animate-effect="fadeInLeft">
			<div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0">
				<div className="col-md-4 col-sm-4 col-xs-4 text-center">
					<PortfolioDetailNavigationPrev to={props.prev} />
				</div>
				<div className="col-md-4 col-sm-4 col-xs-4 text-center">
					<Link to={route.HOME}><i className="icon-th-large"></i></Link>
				</div>
				<div className="col-md-4 col-sm-4 col-xs-4 text-center">
					<PortfolioDetailNavigationNext to={props.next} />
				</div>
			</div>
		</div>
	);
};

export default PortfolioDetailNavigation;