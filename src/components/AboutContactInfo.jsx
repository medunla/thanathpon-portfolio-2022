import React from 'react';

const AboutContactInfo = () => {
	return (
		<div className="fh5co-more-contact">
			<div className="fh5co-narrow-content contact-information">
				<div className="row">
					<div className="col-md-4 col-md-offset-2">
						<div className="fh5co-feature fh5co-feature-sm">
							<div className="fh5co-icon">
								<i className="icon-envelope-o"></i>
							</div>
							<div className="fh5co-text">
								<a href="mailto: thanath.wisit@gmail.com">thanath.wisit@gmail.com</a>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="fh5co-feature fh5co-feature-sm">
							<div className="fh5co-icon">
								<i className="icon-phone"></i>
							</div>
							<div className="fh5co-text">
								<a href="tel: +66804153591">+66 (0) 80-415-3591</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContactInfo;