import React from 'react';

const MessageTile = item => (
  <div>
    <h4>
      {item.image && <img src="http://placehold.it/30x30" />}
      {item.name}
    </h4>
    <p>{item.text}</p>
    <hr />
  </div>
);
const ChatBox = props => (
  <div className="grid-content">{props.messages.map((item, index) => <MessageTile key={index} {...item} />)}</div>
);
ChatBox.defaultProps = {
  messages: [],
  users: []
};
ChatBox.propTypes = {};
export default ChatBox;
