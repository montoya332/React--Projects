import React from "react";

const ItemTile = item => (
  <li>
    <a href="#">{item.name}</a>
  </li>
);
const ChatRoom = props => (
  <section className="block-list">
    <header>In This Room</header>
    <ul>
      {props.users.map((item, index) => <ItemTile key={index} {...item} />)}
    </ul>
  </section>
);
ChatRoom.defaultProps = {
  messages: [],
  users: []
};
ChatRoom.propTypes = {};

export default ChatRoom;
