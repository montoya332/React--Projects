import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import _ from 'lodash';

import YTSearch from 'youtube-api-search';
import SearchBar from './searchBar';
import VideoList from './videoList';
import VideoDetail from './videoDetail';
import './styles.scss';

const API_KEY = 'AIzaSyCw0thCQkqCOY99ejMgR72SFOsyqyiosoc';

export class MainLayoutContainer extends Component {
	static defaultProps = {};
	static propTypes = {};
	constructor(props) {
	  super(props);
	  this.state = {
	    videos: [],
	    selectedVideo: null
	  };
	  this.videoSearch('computer science');
	}

	videoSearch = (term) => {
	  YTSearch({ key: API_KEY, term }, (videos) => {
	    this.setState({
	      videos, // {videos} Synthactic sugar for this.setState({ videos: videos });
	      selectedVideo: videos[0]
	    });
	  });
	}

	render() {
	  const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
	  return (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <SearchBar onSearchTermChange={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        videos={this.state.videos}
      />
    </Grid>
  </Grid>
	  );
	}
}
export default MainLayoutContainer;

