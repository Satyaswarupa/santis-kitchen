import React from 'react';
import MealCard from '../components/MealCard';
import './Menu.scss';

const Menu = () => {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="meal-cards">
        {/* Add MealCard components here */}
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </div>
  );
};

export default Menu;
