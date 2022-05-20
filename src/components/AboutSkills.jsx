import AboutSkillItem from './AboutSkillItem';
import skills from "../assets/data/skills";

const renderSkills = skills.map((skill) => <AboutSkillItem {...skill} />);

const AboutSkills = () => {
	return (
		<div
			id="counter-animate"
			className="fh5co-counters animated"
		>
			<div className="fh5co-narrow-content animate-box fadeInUp animated">
				<div className="row">
					{renderSkills}
				</div>
			</div>
		</div>
	);
};

export default AboutSkills;