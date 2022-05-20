import React from "react"
import AboutDescription from "../components/AboutDescription"
import AboutSkills from "../components/AboutSkills"
import AboutContactForm from "../components/AboutContactForm"
import AboutContactInfo from "../components/AboutContactInfo"

const About = () => {
	return (
		<React.Fragment>
			<AboutDescription />
			<AboutSkills />
			<AboutContactForm />
			<AboutContactInfo />
		</React.Fragment>
	)
}

export default About