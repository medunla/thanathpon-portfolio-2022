const TextArea = (props) => {
	return (
		<div className="form-group">
			<textarea
				value={props.value}
				className={`form-control ${props.className}`}
				placeholder={props.placeholder}
				cols={props.cols}
				rows={props.rows}
				onChange={props.onChange}
			></textarea>
		</div>
	)
}

export default TextArea;