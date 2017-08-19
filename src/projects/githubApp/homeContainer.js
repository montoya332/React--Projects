import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle, DialogContent, DialogContentText, DialogActions } from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';

const styles = {
	container: {
		textAlign: 'center',
		paddingTop: 200
	}
};

class MainLayoutContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	handleRequestClose = () => this.setState({ open: false })
	handleClick = () => this.setState({ open: true })
	render() {
		return (
			<div style={styles.container}>
				<Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
					<DialogTitle>README.md</DialogTitle>
					<DialogContent>
						<article itemProp="text">
							<h1> React--Projects</h1>
							<h2> Available Scripts</h2>
							<p>In the project directory, you can run:</p>
							<h3> <code>yarn start</code></h3>
							<p>Runs the app in the development mode.</p>
							<h3> <code>yarn run build</code></h3>
							<p>Builds the app for production</p>
							<h2> Folder Structure</h2>
							<pre><code>React--Projects/</code></pre>
							<pre><code>&nbsp;README.md</code></pre>
							<pre><code>&nbsp;node_modules/</code></pre>
							<pre><code>&nbsp;package.json</code></pre>
							<pre><code>&nbsp;src/</code></pre>
							<pre><code>&nbsp;index.html</code></pre>
							<pre><code>&nbsp;projects/</code></pre>
							<pre><code>&nbsp;project/</code></pre>
							<pre><code>&nbsp;index.js</code></pre>
							<pre><code>&nbsp;utils/</code></pre>
							<pre><code>&nbsp;stylesheets/</code></pre>
							<pre><code>&nbsp;test/</code></pre>
							<pre><code>&nbsp;webpack/</code></pre>
						</article>
					</DialogContent>
					<DialogActions>
						<Button color="primary" onClick={this.handleRequestClose}>
						OK
						</Button>
					</DialogActions>
				</Dialog>
				<Typography type="display1" gutterBottom>
				Material-UI
				</Typography>
				<Typography type="subheading" gutterBottom>
				React projects
				</Typography>
				<Button raised color="primary" onClick={this.handleClick}>
				README.md
				</Button>
			</div>
		);
	}
}
export default MainLayoutContainer;
