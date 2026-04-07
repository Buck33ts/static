import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  padding = 'medium',
  shadow = 'medium'
}) => {
  const cardClasses = [
    'card',
    hover && 'card-hover',
    `card-padding-${padding}`,
    `card-shadow-${shadow}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
