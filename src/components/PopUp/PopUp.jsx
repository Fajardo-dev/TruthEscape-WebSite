import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PopUp.css";

export default ({ title }) => (
  <Popup
    trigger={<button className="default-btn">{title} </button>}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> {title} </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
          nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
          quibusdam voluptates delectus doloremque, explicabo tempore dicta
          adipisci fugit amet dignissimos?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="default-btn"> {title} </button>}
            position="top center"
            nested
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);
