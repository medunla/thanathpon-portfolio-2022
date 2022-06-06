import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { getPortfolio } from '../store/portfolioDetail/portfolioDetailSlice';
import getPageTitle from '../helpers/getPageTitle';
import PortfolioDetailNavigation from '../components/PortfolioDetailNavigation';
import Error from './Error';

const PortfolioDetail = () => {
	const portfolio = useSelector((state) => state.portfolioDetail.data);
	const { portfolioSlug } = useParams();
	const dispatch = useDispatch();
	const handleGetPortfolio = (slug) => { dispatch(getPortfolio(slug)) };

	useEffect(() => {
		handleGetPortfolio(portfolioSlug);
	}, [portfolioSlug]);


	if (portfolio) {
		const pageTitle = getPageTitle(portfolio.name);

		return (
			<React.Fragment>
				<Helmet>
					<title>{pageTitle}</title>
				</Helmet>
				<div className="fh5co-narrow-content">
					<div className="row">
						<div className="col-md-12 portfolio-content-area animate-box" data-animate-effect="fadeInLeft">
							<h1 className="fh5co-heading">{portfolio.name}</h1>
							<section dangerouslySetInnerHTML={{__html: portfolio.content}}></section>
						</div>
					</div>
					<PortfolioDetailNavigation
						prev={portfolio.meta.prev}
						next={portfolio.meta.next}
					/>
				</div>
			</React.Fragment>
		);
	}

	return <Error />;
}

export default PortfolioDetail;