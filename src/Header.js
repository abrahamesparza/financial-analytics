import React from 'react';
import './header.css';
import HomeIcon from '@material-ui/icons/Home';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Button } from '@material-ui/core';

const Header = () => {
  return (
    <div className='main_header'>
      <Button onClick={() => { alert('Home clicked') } }>
        <HomeIcon fontSize='large' className='home_icon' style={{fill: 'white'}}/>
      </Button>
      <DonutLargeIcon fontSize='large' className='donut_icon' style={ { fill: 'white' } }/>
      <Button onClick={() => { alert('Dropdown clicked') } }>
        <ArrowDropDownIcon fontSize='large' className='dropdown_icon' style={{fill: 'white'}}/>
      </Button>
    </div>
  )
};

export default Header;