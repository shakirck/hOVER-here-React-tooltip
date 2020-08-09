import React, { Component } from 'react';
import DropDown from './DropDown';
import Tooltip from './Tooltip';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dropDownShow: false,
      tooltipPosition: 'top',
    };
  }
  //Toggle Drop Down
  handleDropDownBtnClick = (e) => {
    document.getElementById('menu').classList.toggle('hide');
    // console.log('STATE ', this.state);
  };

  //Select Tool tip position from Dropdown and store in state
  handleDropDownSelection = (e) => {
    const menu = document.getElementById('menu').getElementsByTagName('div');
    for (let item of menu) {
      // console.log(item);
      item.classList = 'drop-item';
    }
    const tooltipPosition = e.target.getAttribute('tooltipvalue');
    if (tooltipPosition != null) {
      e.target.classList = 'drop-item selected';
      this.setState({
        tooltipPosition,
      });
    }

    this.handleHideDropdown();
  };

  //for hiding opened dropdown if we select the tooltip position
  handleHideDropdown = () => {
    document.getElementById('menu').classList.toggle('hide');
  };

  //for making the tooltip visible when mouse is hovered over the element
  handleMouseEnter = (e) => {
    const tooltip = document.getElementById(this.state.tooltipPosition);
    // console.log(tooltip);
    tooltip.classList = 'tooltip';
  };

  //for making the tooltip not visible after the mouse leaves from the element
  handleMouseOut = (e) => {
    // console.log(e);
    const tooltip = document.getElementById(this.state.tooltipPosition);
    // console.log(tooltip);
    tooltip.classList = 'hide';
  };
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <DropDown
          handleDropDownBtnClick={this.handleDropDownBtnClick}
          handleDropDownSelection={this.handleDropDownSelection}
        />
        <Tooltip
          handleMouseEnter={this.handleMouseEnter}
          handleMouseOut={this.handleMouseOut}
        />
      </div>
    );
  }
}
