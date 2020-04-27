import React from "react";

class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef();
		this.state = { spans: 0 };
	}

	componentDidMount() {
		this.imageRef.current.addEventListener("load", this.setImageSizes);
	}

	setImageSizes = (event) => {
		console.log(
			`[setSizesOnLoad]: Image rendered with height: ${this.imageRef.current.clientHeight}`
		);
		const gridRowHeight = 5;
		let height = this.imageRef.current.clientHeight;
		let numGridRows = Math.ceil(height / gridRowHeight + 1);
		console.log("SPANS: " + numGridRows);
		this.setState({ spans: numGridRows });
	};

	render() {
		const { urls, alt_desription: alt } = this.props.image;
		return (
			<img
				style={{ gridRowEnd: `span ${this.state.spans}` }}
				ref={this.imageRef}
				src={urls.thumb}
				alt={alt}
			></img>
		);
	}
}

export default ImageCard;
