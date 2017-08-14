import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

export class MainLayoutContainer extends Component {
	static defaultProps = {};
	static propTypes = {};
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Grid container spacing={24}>
				 <Grid item xs={12}>
					test
				</Grid>
			</Grid>

		);
	}
}
export default MainLayoutContainer;

