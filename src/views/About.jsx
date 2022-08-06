import React from 'react';
import { Helmet } from 'react-helmet';
import { routeLabel } from '../enums/route';
import getPageTitle from '../helpers/getPageTitle';
import AboutDescription from '../components/AboutDescription';
import AboutSkills from '../components/AboutSkills';
import AboutContactForm from '../components/AboutContactForm';
import AboutContactInfo from '../components/AboutContactInfo';

const pageTitle = getPageTitle(routeLabel.ABOUT);

const About = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<AboutDescription />
			<AboutSkills />
			<AboutContactForm />
			<AboutContactInfo />
		</React.Fragment>
	);
};

export default About;