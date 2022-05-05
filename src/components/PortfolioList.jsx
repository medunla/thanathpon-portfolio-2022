import portfolios from '../assets/data/portfolios';
import PortfolioItem from './PortfolioItem'

const PortfolioList = (props) => {
	const types = props.types
	const filterdPortfolios = types
		? portfolios.filter((portfolio) => types.includes(portfolio.type))
		: portfolios
	const renderPortfolioItems = filterdPortfolios.map((portfolio) => <PortfolioItem key={portfolio.id} {...portfolio} />);

	return (
		<div className="row animate-box col-lg-4-clear col-md-4-clear col-sm-6-clear col-xs-6-clear col-xxs-12-clear works-row" data-animate-effect="fadeInLeft">
			{ renderPortfolioItems }
		</div>
	)
}

export default PortfolioList