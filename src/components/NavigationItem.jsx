import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
	const to = props.to
	const label = props.label
	const isActive = props.isActive ?? false

	return (
		<li className={isActive ? 'active' : ''}>
			<Link to={to}>{label}</Link>
		</li>
	);
};

export default NavigationItem;