import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import axiosUnsplash from "../api/unsplash";

class App extends React.Component {
	state = { images: [] };

	handleSearchCallback = (searchTerm) => {
		console.log(`handleSearchCallback() : ${searchTerm}`);

		axiosUnsplash
			.get("/search/photos", {
				params: {
					query: searchTerm,
				},
			})
			.then((response) => {
				console.log(response);
				this.setState({ images: response.data.results });
			})
			.catch((err) => {
				console.error(err);
			});
	};

	render() {
		return (
			<div className="ui container">
				<br />
				<SearchBar onSubmit={this.handleSearchCallback} />
				<div>Love the work! Love the learning!</div>
				<div>
					<ImageList images={this.state.images} />
				</div>
			</div>
		);
	}
}

export default App;
