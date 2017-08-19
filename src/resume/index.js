import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';

const Location = {
	SF: 'San Francisco, CA',
	RWC: 'Redwood City, CA',
	PA: 'Palo Alto, CA',
	SJ: 'San Jose, CA'
};

const jobItems = [
	{
		title: 'Ascendify',
		role: 'Frontend Engineer',
		location: Location.SF,
		startDate: 'July 2015',
		endDate: 'Present',
		faIcon: 'fa-keyboard-o',
		details: 'Planned and architected Front End technology stack (React, BackboneJS ,...)'
	},
	{
		title: 'Health Metrics Systems',
		role: 'Junior Programmer',
		location: Location.PA,
		startDate: 'January 2015',
		endDate: 'July 2015',
		faIcon: 'fa-keyboard-o',
		details: 'Developed and deployed an internal paperless Hospital follow up system saving Clinics many labor hours.'
	},
	{
		title: 'Broadcom',
		role: 'Intern',
		location: Location.SJ,
		startDate: 'May 2013',
		endDate: 'May 2014',
		faIcon: 'fa-keyboard-o',
		details: 'Developed and deployed an internal paperless Hospital follow up system saving Clinics many labor hours.'
	},
	{
		title: 'NASA CIPAIR Capstone Design Project',
		role: 'Software Research Engineer',
		location: Location.SF,
		startDate: 'September 2010',
		endDate: 'June 2011',
		faIcon: 'fa-keyboard-o',
		details: 'Developed and deployed an internal paperless Hospital follow up system saving Clinics many labor hours.'
	}
];
const educationItems = [
	{
		title: 'Master\'s degree, Software Engineering',
		location: 'San Jose State University',
		startDate: '2017',
		endDate: 'Present',
		faIcon: 'fa-graduation-cap'
	},
	{
		title: 'Bachelor\'s degree, Computer Engineering',
		location: 'San Jose State University',
		startDate: '2011',
		endDate: '2014',
		faIcon: 'fa-graduation-cap'
	},
	{
		title: 'Associate of Science (AS), Engineering',
		location: 'Cañada College',
		startDate: '2007',
		endDate: '2011',
		faIcon: 'fa-graduation-cap'
	}
];
const projectItems = [
	{
		title: 'Senior Project - Q-In',
		location: 'Github: montoya332/Qin, montoya332/QinPhoneGap',
		startDate: 'September 2013',
		endDate: 'May 2014',
		faIcon: 'fa-keyboard-o',
		details: 'The main objective of this project is to create an automated process such that attendees at an event can check in on the fly and provide event organizers with real time analytics.'
	}
];

const languageIconItems = [
	{
		title: 'JS',
		devicon: 'devicon-javascript-plain'
	}
];

const skillsIconItems = [
	{
		title: 'Node.js',
		devicon: 'devicon-nodejs-plain'
	},
	{
		title: 'React',
		devicon: 'devicon-react-original'
	},
	{
		title: 'AngularJS',
		devicon: 'devicon-angularjs-plain'
	},
	{
		title: 'CSS',
		devicon: 'devicon-css3-plain'
	},
	{
		title: 'Sass',
		devicon: 'devicon-sass-original'
	},
	{
		title: 'HTML',
		devicon: 'devicon-html5-plain'
	},
	{
		title: 'MongoDB',
		devicon: 'devicon-mongodb-plain'
	},
	{
		title: 'Postgres',
		devicon: 'devicon-postgresql-plain'
	}
];

const App = React.createClass({
	render() {
		return (
			<div className="page">
				<div className="container">
					<div className="row">
						<div className="seven columns">
							<HeroTitle
								title="Arturo Montoya"
								subtitle="Work smarter, not harder"
								avatarSrc="./public/avatar.jpg"
							/>
						</div>
						<div className="five columns contact-info">
							<div className="inline-icon-item">
								<i className="fa fa-mobile fa-fw" /><span>(650) 814-7939</span>
							</div>
							<div className="inline-icon-item">
								<i className="fa fa-envelope fa-fw" /><span>montoya332@live.com</span>
							</div>
							<div className="inline-icon-item">
								<i className="fa fa-github fa-fw" /><span>github.com/montoya332</span>
							</div>
							<div className="inline-icon-item">
								<i className="fa fa-user fa-fw" /><span>montoya332.github.io/React--Projects</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="eight columns">
							<Timeline
								title="The Story"
								headerIcon="fa-clock-o"
								items={jobItems}
								pageLine
							/>
							<Timeline
								title="Education"
								headerIcon="fa-rocket"
								items={educationItems}
							/>
							<Timeline
								title="Projects"
								headerIcon="fa-rocket"
								items={projectItems}
							/>
						</div>
						<div className="four columns">
							<IconItems
								title="Skills"
								faIcon="fa-cube"
								items={skillsIconItems}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

const HeroTitle = React.createClass({
	render() {
		return (
			<div className="hero-header">
				<div className="row">
					<div className="five columns avatar">
						<img width="122" src={this.props.avatarSrc} alt="Me" className="u-max-full-width" />
					</div>
					<div className="seven columns">
						<div className="hero-title">
							<div className="title">{this.props.title}</div>
							<div className="subtitle top-spacer">{this.props.subtitle}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

const Timeline = React.createClass({
	render() {
		return (
			<div className="timeline">
				<TimelineHeader
					title={this.props.title}
					faIcon={this.props.headerIcon}
				/>
				<div className="timeline-items">
					{(this.props.pageLine) ? <div className="page-line" /> : null}
					{this.props.items.map(item => <TimelineItem item={item} />)}
				</div>
			</div>
		);
	}
});

const TimelineItem = React.createClass({
	render() {
		return (
			<div className="row timeline-item">
				<div className="four columns">
					<div className="item-dates">
						<div>{this.props.item.startDate} -</div>
						<div>{this.props.item.endDate}</div>
					</div>
				</div>
				<div className="one column">
					<TimelineMilestoneIcon faIcon={this.props.item.faIcon} />
				</div>
				<div className="seven columns">
					<TimelineItemHeader {...this.props} />
					<div className="item-location">
						{this.props.item.location}
					</div>
					<div className="item-details">
						{this.props.item.details}
					</div>
				</div>
			</div>
		);
	}
});

const TimelineItemHeader = React.createClass({
	render() {
		return (
			<div className="item-header">
				{this.props.item.role && (
					<div className="item-role">
						{this.props.item.role}
						<span className="item-role-at"> at </span>
					</div>
				)}
				<div className="item-title">
					{this.props.item.title}
				</div>
			</div>
		);
	}
});

const SectionHeader = React.createClass({
	render() {
		return (
			<div className="section-header-title">
				{this.props.title}
			</div>
		);
	}
});

const TimelineHeader = React.createClass({
	render() {
		return (
			<div className="row">
				<div className="three columns">
					<div className="invisible">Filler</div>
				</div>
				<div className="two columns">
					<div className="invisible">Filler</div>
				</div>
				<div className="seven columns">
					<SectionHeader {...this.props} />
				</div>
			</div>
		);
	}
});

const TimelineMilestoneIcon = React.createClass({
	render() {
		const stackClassName = this.props.isLarge ? 'fa-stack fa-lg' : 'fa-stack';

		return (
			<div className="timeline-milestone-icon">
				<span className={stackClassName}>
					<i className="fa fa-circle fa-stack-2x" />
					<i className={`fa ${this.props.faIcon} fa-stack-1x fa-inverse`} />
				</span>
			</div>
		);
	}
});

const IconItems = React.createClass({
	render() {
		return (
			<div className="icon-items">
				<SectionHeader
					title={this.props.title}
					faIcon={this.props.faIcon}
				/>
				<div className="row">
					{this.props.items.map(item => (
						<div className="three columns">
							<IconItem {...item} />
						</div>
					))}
				</div>
			</div>
		);
	}
});

const IconItem = React.createClass({
	render() {
		return (
			<div className="icon-item">
				<i className={`${this.props.devicon}`} />
				<div className="title">{this.props.title}</div>
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.querySelector('#react-app')
);
