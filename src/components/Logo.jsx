import { Link } from 'react-router-dom'
import { route } from '../enums/route'

const Logo = () => {
	return (
		<h1 id="fh5co-logo">
			<Link to={route.HOME} title="Thanathpon's Portfolio">
				<img src="http://thnp-w.com/wp-content/uploads/2020/12/Asset-3@2x.png" alt="Thanathpon's Portfolio" title="Thanathpon's Portfolio" />
			</Link>
		</h1>
	)
}

export default Logo