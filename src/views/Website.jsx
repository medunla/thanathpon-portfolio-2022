import portfolioType from '../enums/portfolioType'
import PortfolioList from '../components/PortfolioList'

const Website = () => {
	return (
		<div className="fh5co-narrow-content">
			<PortfolioList types={[portfolioType.WEB_DESIGN]} />
		</div>
	)
}

export default Website