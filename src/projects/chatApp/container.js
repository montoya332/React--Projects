import React, { Component } from 'react';
import ChatRoom from './chatRoom';
import SideBar from './sideBar';
import ChatBox from './chatBox';
const users = [
	{id:1,name:'Parth'},
	{id:2,name:'Karthik'},
	{id:3,name:'Dhanashree'},
	{id:4,name:'Arturo'}
];
const messages = [
	{id:1, text:'Hello'},
	{id:2, text:'Hey'}
];
class MainLayoutContainer extends Component {
	render() {
		return (
			<div className="grid-frame">
				{false && (<div zf-panel position="left" id="sidebar" className="medium-grid-block collapse medium-3 large-3 vertical">
							<SideBar />
							</div>)}
				<div className="grid-block collapse medium-12 large-12 vertical">
					<div id="header" className="shrink collapse grid-content">
						<div className="primary title-bar">
							<div className="left title">CMPE-275</div>
						</div>
					</div>
					<div className="grid-block">
						<div className="grid-block small-12 medium-9 vertical">
							<ChatBox users={users} messages={messages} />
							<div className="message-input grid-content collapse shrink">
								<span className="inline-label">
									<input type="text" placeholder="Message" />
									<a href="#" className="button">Send</a>
								</span>
							</div>
						</div>
						<div className="grid-content medium-3 show-for-medium message-side-bar">
							<ChatRoom users={users} messages={messages} />
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default MainLayoutContainer;
