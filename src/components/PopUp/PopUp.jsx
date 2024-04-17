import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./PopUp.css";

export default ({ title, cont }) => (
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
        <div className="content"> {cont}</div>
        <div className="actions">
          <Popup
            trigger={<button className="default-btn"> {title} </button>}
            position="top center"
            nested
          >
            <span>{cont}</span>
          </Popup>
        </div>
      </div>
    )}
  </Popup>
);
