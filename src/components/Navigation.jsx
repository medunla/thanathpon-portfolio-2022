import { useResolvedPath, useMatch } from 'react-router-dom'
import { route, routeLabel } from '../enums/route'
import NavigationItem from './NavigationItem'

const routes = [
	{
		to: route.HOME,
		label: routeLabel.HOME
	},
	{
		to: route.WEBSITE,
		label: routeLabel.WEBSITE
	},
	{
		to: route.APPLICATION,
		label: routeLabel.APPLICATION
	},
	{
		to: route.PUBLICATION,
		label: routeLabel.PUBLICATION
	},
	{
		to: route.OTHER,
		label: routeLabel.OTHER
	},
	{
		to: route.ABOUT,
		label: routeLabel.ABOUT
	}
];

const Navigation = () => {
	const renderNavigationItems = routes.map((item, index) => {
		const resolved = useResolvedPath(item.to);
		const isActive = useMatch({ path: resolved.pathname, end: true });

		return (
			<NavigationItem
				key={index}
				isActive={isActive}
				{...item}
			/>
		);
	});

	return (
		<nav className="fh5co-main-menu">
			<ul id="menu-main-menu" className="menu">
				{renderNavigationItems}
			</ul>
		</nav>
	);
};

export default Navigation;