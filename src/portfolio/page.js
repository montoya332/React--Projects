import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const PageContainer = props => (
	<div className="wrapper">
		<div className="page-header page-header-small" filter-color="orange">
			<div className="page-header-image" data-parallax="true" style={{ backgroundImage: 'url(./public/img/classRoom.jpg)' }} />
			<div className="container">
				<div className="content-center">
					<div className="photo-container">
						<img src="./public/img/avatar.jpg" alt="" />
					</div>
					<h3 className="title">Arturo Montoya</h3>
					<p className="category">Engineer</p>
					<div className="content">
						<div className="social-description">
							<h2>3</h2>
							<p>Years Experience</p>
						</div>
						<div className="social-description">
							<h2>2</h2>
							<p>Current Position</p>
						</div>
						<div className="social-description">
							<h2>1.5</h2>
							<p>Average Tenure</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="section">
			<div className="container">
				<div className="button-container">
					<a href="https://montoya332.github.io/React--Projects/public/resume.html" className="btn btn-primary btn-round btn-lg">Resume</a>
					<a href="https://www.github.com/montoya332" className="btn btn-default btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Github">
						<i className="fa fa-github" />
					</a>
					<a href="https://www.linkedin.com/in/arturo-montoya-05b69976/" className="btn btn-default btn-round btn-lg btn-icon" rel="tooltip" title="Follow me on Linkedin">
						<i className="fa fa-linkedin-square" />
					</a>
					<a href="mailto:montoya332@live.com" target="_top" className="btn btn-default btn-round btn-lg btn-icon" rel="tooltip" title="">
						<i className="fa fa-envelope" />
					</a>
				</div>
				<h3 className="title">About me</h3>
				<h5 className="description">launched a successful web app which is in current use at Hospitals and Clinics in Kansas City (HMS)</h5>
			</div>
		</div>
	</div>
);
export default PageContainer;
