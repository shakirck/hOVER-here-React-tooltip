import React, { Component } from 'react';

export default class Tooltip extends Component {
  render() {
    const { handleMouseEnter, handleMouseOut } = this.props;
    return (
      <div className="Button-Component">
        <div className="btn-container">
          <div
            className="btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseOut}
          >
            <div>hOVER</div>
            <div className="tooltip hide" id="top">
              TOP
            </div>
            <div className="tooltip hide" id="right">
              right
            </div>
            <div className="tooltip hide" id="bottom">
              bottom
            </div>
            <div className="tooltip hide" id="left">
              left
            </div>
          </div>
        </div>
      </div>
    );
  }
}
