import { useParams } from 'react-router-dom'

const PortfolioDetail = () => {
	const { portfolioId } = useParams();

	return (
		<div className="fh5co-narrow-content">
			<h1>PortfolioDetail {portfolioId}</h1>
		</div>
	)
}

export default PortfolioDetail