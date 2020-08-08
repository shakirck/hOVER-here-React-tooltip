import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className="Button-Component">
        <div className="btn-container">
          <div className="btn">
            <div>Button</div>
            <div className="tooltip" id="top">
              {' '}
              TOP
            </div>
            <div className="tooltip" id="right">
              {' '}
              right
            </div>
            <div className="tooltip" id="bottom">
              {' '}
              bottom
            </div>
            <div className="tooltip" id="left">
              {' '}
              left
            </div>
          </div>
        </div>
      </div>
    );
  }
}
