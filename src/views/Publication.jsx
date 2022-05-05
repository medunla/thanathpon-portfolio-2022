import portfolioType from '../enums/portfolioType'
import PortfolioList from '../components/PortfolioList'

const Publication = () => {
	return (
		<div className="fh5co-narrow-content">
			<PortfolioList types={[portfolioType.PUBLICATION]} />
		</div>
	)
}

export default Publication