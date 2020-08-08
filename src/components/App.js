import React, { Component } from 'react';
import DropDown from './DropDown';
import Button from './Button';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dropDownShow: false,
      tooltipPosition: 'top',
    };
  }
  handleDropDownBtnClick = (e) => {
    console.log(e);
    document.getElementById('menu').classList.toggle('hide');
    console.log('STATE ', this.state);
  };
  handleDropDownSelection = (e) => {
    const menu = document.getElementById('menu').getElementsByTagName('div');
    for (let item of menu) {
      console.log(item);
      item.classList = 'drop-item';
    }
    const tooltipPosition = e.target.getAttribute('tooltipvalue');
    if (tooltipPosition != null) {
      e.target.classList = 'drop-item selected';
      this.setState({
        tooltipPosition,
      });
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <DropDown
          handleDropDownBtnClick={this.handleDropDownBtnClick}
          handleDropDownSelection={this.handleDropDownSelection}
        />
        <Button />
      </div>
    );
  }
}
