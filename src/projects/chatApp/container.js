import React, { Component } from 'react';
import ChatRoom from './chatRoom';
import SideBar from './sideBar';
import ChatBox from './chatBox';
import { createWebsocket } from './websocket';

const users = [
	{ id: 1, name: 'Parth' },
	{ id: 2, name: 'Karthik' },
	{ id: 3, name: 'Dhanashree' },
	{ id: 4, name: 'Arturo' }
];
class MainLayoutContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: []
		};
		this.handeSubmit = this.handeSubmit.bind(this);
	}
	componentDidMount() {
		const self = this;
		this.socket = createWebsocket();
		this.socket.onmessage = (event) => { console.log(event.data); self.addMessage(event.data); };
		this.socket.onopen = (event) => { console.log(event); };
		this.socket.onclose = (event) => { console.log(event); };
		window.socket = this.socket;
		window.that = this;
	}
	addMessage(text = '') {
		let messages = this.state.messages;
		messages.push({ id: messages.length, text });
		this.setState({ messages });
	}
	handeSubmit(e) {
		e.preventDefault();

		if (this.socket.readyState == WebSocket.OPEN) {
			this.socket.send(this.textInput.value);
			this.textInput.value = '';
		}
		return false;
	}
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
							<ChatBox users={users} messages={this.state.messages} />
							<div className="message-input grid-content collapse shrink">
								<form className="inline-label" onSubmit={this.handeSubmit}>
									<input ref={(input) => { this.textInput = input; }} name="text" type="text" placeholder="Message" />
									<button type="button" className="button">Send</button>
								</form>
							</div>
						</div>
						<div className="grid-content medium-3 show-for-medium message-side-bar">
							<ChatRoom users={users} messages={this.state.messages} />
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default MainLayoutContainer;
