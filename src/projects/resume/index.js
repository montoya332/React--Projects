import React from 'react';
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
    title: 'eBay',
    role: 'Software Engineer',
    location: Location.SJ,
    startDate: 'April 2018',
    endDate: 'Present',
    faIcon: 'fa-keyboard-o',
    details: 'Backend For Front end Layer (BFF endpoints using graphql)'
  },
  {
    title: 'Ascendify',
    role: 'Full Stack Engineer',
    location: Location.SF,
    startDate: 'October 2017',
    endDate: 'April 2018',
    faIcon: 'fa-keyboard-o',
    details: 'Integration and Migration to new MicroServices'
  },
  {
    title: 'Ascendify',
    role: 'Frontend Engineer',
    location: Location.SF,
    startDate: 'July 2015',
    endDate: 'October 2017',
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
    title: "Master's degree, Software Engineering",
    location: 'San Jose State University',
    startDate: '2017',
    endDate: 'Present',
    faIcon: 'fa-graduation-cap'
  },
  {
    title: "Bachelor's degree, Computer Engineering",
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
    details:
      'The main objective of this project is to create an automated process such that attendees at an event can check in on the fly and provide event organizers with real time analytics.'
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

const App = props => (
  <div className="container top-spacer">
    <div className="row">
      <div className="medium-7 column">
        <HeroTitle title="Arturo Montoya" subtitle="Work smarter, not harder" avatarSrc="./img/avatar.jpg" />
      </div>
      <div className="medium-4 column contact-info column-nospacer">
        <div className="inline-icon-item">
          <i className="fa fa-mobile fa-fw" />
          <a href="tel:650-814-7939">(650) 814-7939</a>
        </div>
        <div className="inline-icon-item">
          <i className="fa fa-envelope fa-fw" />
          <a href="mailto:montoya332@live.com" target="_top">
            montoya332@live.com
          </a>
        </div>
        <div className="inline-icon-item">
          <i className="fa fa-github fa-fw" />
          <a href="https://goo.gl/9E8bvn">github.com/montoya332</a>
        </div>
        <div className="inline-icon-item">
          <i className="fa fa-user fa-fw" />
          <a href="https://goo.gl/NNFds1">Linkedin</a>
        </div>
      </div>
    </div>
    <div className="row top-spacer">
      <div className="small-12 medium-8 column">
        <Timeline title="Background" headerIcon="fa-clock-o" items={jobItems} pageLine />
        <Timeline title="Education" headerIcon="fa-rocket" items={educationItems} />
        <Timeline title="Projects" headerIcon="fa-rocket" items={projectItems} />
      </div>
      <div className="small-12 medium-3 column end">
        <IconItems title="Skills" faIcon="fa-cube" items={skillsIconItems} />
      </div>
    </div>
  </div>
);

const HeroTitle = props => (
  <div className="hero-header">
    <div className="row">
      <div className="small-3 medium-4 column column-nospacer avatar">
        <img width="122" alt="Me" src={props.avatarSrc} className="avatar-thumb avatar-thumb--styled" />
      </div>
      <div className="small-8 medium-7 column column-nospacer">
        <div className="hero-title">
          <div className="title">{props.title}</div>
          <div className="subtitle top-spacer">{props.subtitle}</div>
        </div>
      </div>
    </div>
  </div>
);

const Timeline = props => (
  <div className="timeline">
    <SectionHeader title={props.title} faIcon={props.headerIcon} />
    <ul className="timeline-items">
      {props.items.map((item, key) => <TimelineItem key={key} item={item} pageLine={props.pageLine} />)}
    </ul>
  </div>
);

const TimelineItem = props => {
  const { item, pageLine } = props;
  // time-line
  return (
    <li className={`timeline-item ${pageLine && ''}`}>
      <div className="row">
        <div className="small-3 medium-4 column show-for-large">
          <div className="item-dates">
            <div>{item.startDate} -</div>
            <div>{item.endDate}</div>
          </div>
        </div>
        <div className="small-9 medium-7 column end">
          <TimelineItemHeader {...props} />
          <div className="item-location hide-for-large">{`${item.startDate} - ${item.endDate}`}</div>
          <div className="item-location">{item.location}</div>
          <div className="item-details">{item.details}</div>
        </div>
      </div>
    </li>
  );
};

const TimelineItemHeader = props => (
  <div className="item-header">
    {props.item.role && (
      <div className="item-role">
        {props.item.role}
        <span className="item-role-at"> at </span>
      </div>
    )}
    <div className="item-title">{props.item.title}</div>
  </div>
);

const SectionHeader = props => <div className="section-header-title">{props.title}</div>;

const TimelineHeader = props => (
  <div className="row">
    <div className="medium-7 column">
      <SectionHeader {...props} />
    </div>
  </div>
);

const TimelineMilestoneIcon = props => {
  const stackClassName = props.isLarge ? 'fa-stack fa-lg' : 'fa-stack';
  // timeline-milestone-icon
  return (
    <span className="">
      <span className={stackClassName}>
        <i className="fa fa-circle fa-stack-2x" />
        <i className={`fa ${props.faIcon} fa-stack-1x fa-inverse`} />
      </span>
    </span>
  );
};

const IconItems = props => (
  <div className="icon-items">
    <SectionHeader title={props.title} faIcon={props.faIcon} />
    <div className="row">
      {props.items.map((item, key) => (
        <div key={key} className="medium-3 large-2 column icons-container icons-container--small end">
          <IconItem {...item} />
        </div>
      ))}
    </div>
  </div>
);

const IconItem = props => (
  <div className="icon-item">
    <i className={`${props.devicon}`} />
    <div className="title">{props.title}</div>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#react-app'));
