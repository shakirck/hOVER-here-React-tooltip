import React, { Component } from 'react';

export default class DropDown extends Component {
  render() {
    const { handleDropDownBtnClick, handleDropDownSelection } = this.props;
    return (
      <div className="Dropdown-Component">
        <div className="dropdown-container">
          <div className="dropdown">
            <button id="dropdownbtn" onClick={handleDropDownBtnClick}>
              TootlTip
            </button>
            <div id="menu" className=" hide" onClick={handleDropDownSelection}>
              <div className="drop-item selected " tooltipvalue="top">
                TOP
              </div>
              <div className="drop-item  " tooltipvalue="right">
                {' '}
                Right
              </div>
              <div className="drop-item" tooltipvalue="bottom">
                {' '}
                Bottom
              </div>
              <div className="drop-item" tooltipvalue="left">
                {' '}
                Left
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
