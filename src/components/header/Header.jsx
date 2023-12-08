import React from 'react';
import './header.css';
import people from '../../assets/Group 81.png'


const Header = () => {
  return (
    <div className='main__header section__padding' id="home">
      <div className='main__header-content'>
        <h1 className='gradient__text'>
        Start earning money with Keacash
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
        <div className='main__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people registered on the site</p>
        </div>
        <div className='main__header-content__earned'>
          <p>$10,541 earned by users</p>
        </div>
        <div className='main__header-content__offers'>
          <p>17,600 offers completed</p>
        </div>
      </div>
    </div>
  )
}

export default Header