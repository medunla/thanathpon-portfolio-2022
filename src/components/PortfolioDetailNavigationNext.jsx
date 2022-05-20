import { Link } from 'react-router-dom'

const PortfolioDetailNavigationNext = (props) => {
	if (props.to) {
		return <Link to={`/portfolios/${props.to}`}><span>Next Project</span> <i className="icon-long-arrow-right"></i></Link>
	}
	return ''
}

export default PortfolioDetailNavigationNext