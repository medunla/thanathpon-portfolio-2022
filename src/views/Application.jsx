import portfolioType from '../enums/portfolioType'
import PortfolioList from '../components/PortfolioList'

const Application = () => {
	return (
		<div className="fh5co-narrow-content">
			<PortfolioList types={[portfolioType.APPLICATION]} />
		</div>
	)
}

export default Application