import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	handleInputChange(term) {
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}

	render() {
		return (
			<div className="search-bar">
				<TextField
					id="placeholder"
					label="Search"
					InputProps={{ placeholder: 'Type something...' }}
					helperText="Full width!!!"
					fullWidth
					margin="normal"
					onChange={event => this.handleInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

export default SearchBar;
