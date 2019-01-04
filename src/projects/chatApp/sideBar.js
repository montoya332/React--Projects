import React from 'react';

const SideBar = () => (
  <div>
    <div className="grid-content collapse shrink hide-for-medium">
      <a href="" className="secondary button expand" zf-close>
        Close Arturo
      </a>
    </div>
    <div className="grid-content collapse shrink">
      <img src="http://placehold.it/400x150&text=Logo" />
    </div>
    <div className="grid-content">
      <section className="block-list">
        <header>Rooms</header>
        <ul>
          <li>
            <a href="#">
              Slam Book
              <span className="block-list-label">7</span>
            </a>
          </li>
          <li>
            <a href="#">
              Foundation Chat
              <span className="block-list-label">2</span>
            </a>
          </li>
          <li>
            <a className="success" href="#">
              LolCats
              <span className="block-list-label">2</span>
            </a>
          </li>
        </ul>
      </section>

      <section className="block-list">
        <header>People</header>
        <ul>
          <li>
            <a href="#">
              Glen Coco
              <span className="block-list-label">2</span>
            </a>
          </li>
          <li>
            <a className="success" href="#">
              Guy Guyerson
              <span className="block-list-label">2</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <div className="grid-content collapse shrink avatar-section">
      <img src="http://placehold.it/50x50" />
      Regina George
    </div>
  </div>
);

export default SideBar;
