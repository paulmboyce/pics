import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
	renderImages = () => {
		return this.props.images.map(function createIMGTags(image) {
			return <ImageCard image={image} key={image.id} />;
		});
	};

	render() {
		return (
			<div>
				<b>Found {this.props.images.length} images.</b>
				<div className="image-list">{this.renderImages()}</div>
			</div>
		);
	}
}

export default ImageList;
