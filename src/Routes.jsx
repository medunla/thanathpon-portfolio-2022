import {
	Routes as TheRoutes,
	Route,
} from 'react-router-dom';
import { route } from './enums/route'

import Home from './views/Home'
import Website from './views/Website'
import Application from './views/Application'
import Publication from './views/Publication'
import Other from './views/Other'
import About from './views/About'
import PortfolioDetail from './views/PortfolioDetail'
import Error from './views/Error';

const routes = [
	{
		path: route.HOME,
		element: <Home />
	},
	{
		path: route.WEBSITE,
		element: <Website />
	},
	{
		path: route.APPLICATION,
		element: <Application />
	},
	{
		path: route.PUBLICATION,
		element: <Publication />
	},
	{
		path: route.OTHER,
		element: <Other />
	},
	{
		path: route.ABOUT,
		element: <About />
	},
	{
		path: route.PORTFOLIO_DETAIL,
		element: <PortfolioDetail />
	},
	{
		path: '*',
		element: <Error />
	}
];

const renderRoutes = routes.map((item, index) => <Route key={index} path={item.path} element={item.element} />);

const Routes = () => {
	return <TheRoutes>{renderRoutes}</TheRoutes>
};

export default Routes;