import React from 'react';
import { Helmet } from 'react-helmet';
import { routeLabel } from '../enums/route';
import getPageTitle from '../helpers/getPageTitle';
import portfolioType from '../enums/portfolioType';
import PortfolioList from '../components/PortfolioList';

const pageTitle = getPageTitle(routeLabel.WEBSITE);

const Website = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<div className="fh5co-narrow-content">
				<PortfolioList types={[portfolioType.WEB_DESIGN]} />
			</div>
		</React.Fragment>
	);
};

export default Website;