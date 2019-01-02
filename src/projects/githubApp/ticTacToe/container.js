import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {Clear, PanoramaFishEye} from '@material-ui/icons';
import _ from 'lodash';

export class MainLayoutContainer extends Component {
  static defaultProps = {};
  static propTypes = {};
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }
  handleCellClick = key => {
    console.log(key);
  };
  renderItem(item, key, list) {
    let cell = item;
    const styles = {
      width: 60,
      height: 60,
      fontSize: '48px'
    };

    if (item === 'O') {
      cell = <PanoramaFishEye />;
    } else if (item === 'X') {
      cell = <Clear />;
    }
    return (
      <td onClick={() => this.handleCellClick(key)} className={`cell cell__${key + 1}`} key={key}>
        {cell}
      </td>
    );
  }
  renderRow(row, key) {
    return <tr key={key}>{row.map((cell, cellKey) => this.renderItem(cell, cellKey + key * row.length))}</tr>;
  }
  renderBoard() {
    const board = [['X', '', 'X'], ['', '', 'X'], ['X', '', 'O']];
    return (
      <table>
        <tbody>{board.map(this.renderRow)}</tbody>
      </table>
    );
  }
  render() {
    return (
      <Grid container gutter={24} style={{paddingTop: '20px'}}>
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
