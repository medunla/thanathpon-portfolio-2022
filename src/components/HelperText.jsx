const HelperText = (props) => {
	const classes = `helper-text${props.isError ? ' is-error' : ''} ${props.className}`;

	return (
		<span className={classes}>{props.value}</span>
	)
}

export default HelperText;