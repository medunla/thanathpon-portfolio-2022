import webTitle from '../enums/title';

const getPageTitle = (title) => {
	if (title) {
		return `${title} | ${webTitle}`;
	}
	return webTitle;
};

export default getPageTitle;