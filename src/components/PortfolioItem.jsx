import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = (props) => {
	return (
		<div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
			<Link to={`/portfolios/${props.slug}`} title={props.name}>
				<div className="work-item-image-wrapper">
					<img src={props.thumbnail} alt={props.name} className="img-responsive" />
					<div className="work-item-image-overlay">
						<img className="custom-logo custom-logo-desktop" src="http://thnp-w.com/wp-content/uploads/2020/12/Asset-3@2x.png" alt="Thanathpon's Portfolio" title="Thanathpon's Portfolio" />
					</div>
				</div>
				<h3 className="fh5co-work-title">{props.name}</h3>
				<p>{props.type || 'No categories'}</p>
			</Link>
		</div>
	);
};

export default React.memo(PortfolioItem);