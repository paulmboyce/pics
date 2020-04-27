import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	// Define a ARROW FUNCTION () => {} for EASY "this" context.
	onFormSubmit = (evt) => {
		evt.preventDefault();
		console.log(`STATE: ${this.state.term}`);
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui inverted segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className=" field">
						<div className="ui labeled input icon focus">
							<label className="ui basic label">
								Image Search:
							</label>
							<input
								type="text"
								placeholder="Begin typing to search..."
								value={this.state.term}
								onChange={(e) =>
									this.setState({
										term: e.target.value,
									})
								}
							></input>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
