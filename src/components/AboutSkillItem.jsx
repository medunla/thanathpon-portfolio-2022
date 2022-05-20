const AboutSkillItem = (props) => {
	return (
		<div className="col-lg-3 col-md-6 col-sm-6 text-center animate-box counters-item fadeInUp animated">
			<img
				src={props.thumbnail}
				alt={props.name}
				className="about-skill-icon"
			/>
			<span className="fh5co-counter-label">{props.name}</span>
		</div>
	);
};

export default AboutSkillItem;