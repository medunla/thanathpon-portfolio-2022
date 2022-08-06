import React from 'react';
import { Helmet } from 'react-helmet';
import { routeLabel } from '../enums/route';
import getPageTitle from '../helpers/getPageTitle';
import portfolioType from '../enums/portfolioType';
import PortfolioList from '../components/PortfolioList';

const pageTitle = getPageTitle(routeLabel.OTHER);

const Other = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<div className="fh5co-narrow-content">
				<PortfolioList types={[
					portfolioType.ONLINE_ADVERTISING,
					portfolioType.DIRECTORY_OR_DIGITAL_SIGNAGE
				]} />
			</div>
		</React.Fragment>
	);
};

export default Other;