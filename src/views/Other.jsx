import portfolioType from '../enums/portfolioType'
import PortfolioList from '../components/PortfolioList'

const Other = () => {
	return (
		<div className="fh5co-narrow-content">
			<PortfolioList types={[
				portfolioType.ONLINE_ADVERTISING,
				portfolioType.DIRECTORY_OR_DIGITAL_SIGNAGE
			]} />
		</div>
	)
}

export default Other