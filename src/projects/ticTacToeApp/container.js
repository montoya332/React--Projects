import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { Clear, PanoramaFishEye } from 'material-ui-icons';

import _ from 'lodash';

export class MainLayoutContainer extends Component {
	static defaultProps = {};
	static propTypes = {};
	constructor(props) {
		super(props);
		this.renderItem = this.renderItem.bind(this);
		this.renderRow = this.renderRow.bind(this);
	}
	renderItem(item,key,list){
		const styles = {
		    width: 60,
		    height: 60,
		    fontSize: '48px'
		};

		if('O' === item ){
			return <td className={`cell cell__${key+1}`} key={key}><PanoramaFishEye/></td>
		}
		if('X'=== item){
			return <td className={`cell cell__${key+1}`} key={key}><Clear/></td>
		}

		return <td className={`cell cell__${key+1}`} key={key}>{item}</td>
	}
	renderRow(row,key){
		return <tr key={key}>{row.map((cell,cellKey)=>this.renderItem(cell,cellKey+key*row.length))}</tr>
	}
	renderBoard(){
		const board = [['X','O','X'],['O','X','X'],['X','X','O']];
		return (
			<table>
				<tbody>
					{board.map(this.renderRow)}
				</tbody>
			</table>

		);
	}
	render() {
		return (
			<Grid container gutter={24} style={{paddingTop:'20px'}}>
				<Grid item xs={3} />
				<Grid item xs={6}>
					{this.renderBoard()}
				</Grid>
				<Grid item xs={3} />
			</Grid>

		);
	}
}
export default MainLayoutContainer;

