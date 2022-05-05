import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	BrowserRouter,
	Routes,
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
import Sidebar from './components/Sidebar'

import './assets/css/icomoon.css'
import './assets/css/bootstrap.css'
import './assets/css/app.css'

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
	}
]

const renderRoutes = routes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<div id="fh5co-page">
				<a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
				<Sidebar />

				<div id="fh5co-main">
					<Routes>
						{renderRoutes}
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	</React.StrictMode>
)
