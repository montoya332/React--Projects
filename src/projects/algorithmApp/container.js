import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import _ from 'lodash';

export class MainLayoutContainer extends Component {
	static defaultProps = {};
	static propTypes = {};
	constructor(props) {
		super(props);
		this.state = {
			list: _.times(10, (key) => 10-key),
			sort:false,
			activeA: null,
			activeB: null
		};
		this.startBubbleSort = this.startBubbleSort.bind(this)
	}
	bubbleSort(arr){
		const ret = Array.from(arr)
		let swapped
		do {
			swapped = false
			for (let i = 1; i < ret.length; ++i) {
				if (ret[i - 1] > ret[i]) {
					[ret[i], ret[i - 1]] = [ret[i - 1], ret[i]];
					swapped = true;
				}
			}
		} while (swapped)
		return ret;
	}
	startBubbleSort(){
		const self = this;
		this.setState({sort: !this.state.sort})
		if(!this.state.sort){
			this.bubbleSort([...this.state.list])
		} else {
			this.setState({activeA: null, activeB: null})
		}
	}
	render() {
		const {sort} = this.state;
		const buttonProps = sort ? {color:'accent'} : {color:'primary'};
		const buttonText = sort ? 'Stop' : 'Start';
		return (
			<Grid container gutter={24}>
				<Grid item xs={12}>
					<Button raised {...buttonProps} onClick={this.startBubbleSort}>  {buttonText} </Button>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={10}>
				{this.state.list.map((key)=>{
					const activeColor = (this.state.activeA === key) || (this.state.activeB === key);
					const buttonProps = activeColor ? {color:'accent'} : {};
					return <Button key={key} raised {...buttonProps}>  {key} </Button>
				})}
				</Grid>
				<Grid item xs={1} />
			</Grid>
		);
	}
}
export default MainLayoutContainer;

