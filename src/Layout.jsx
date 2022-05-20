import { useState } from 'react';
import Sidebar from './components/Sidebar'
import Routes from './Routes';

const Layout = () => {
	const [isNavActive, setIsNavActive] = useState(false);

	const toggleNavigationHandle = () => {
		setIsNavActive((prevValue) => !prevValue);
	};

	return (
		<div id="fh5co-page" className={isNavActive ? 'is-nav-active' : ''}>
			<a
				href="#"
				className={`js-fh5co-nav-toggle fh5co-nav-toggle${isNavActive ? ' active' : ''}`}
				onClick={toggleNavigationHandle}
			>
				<i></i>
			</a>
			<Sidebar />

			<div id="fh5co-main">
				<Routes />
			</div>
		</div>
	);
};

export default Layout;