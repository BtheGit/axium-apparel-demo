import React from 'react';

const DropdownColumn = ({isActive, category, subcategories, className}) => {

  const renderSubs = subs => subs.map((sub, idx) => <li key={idx}>{sub}</li>)

  return (
    <li className={`${className}__category`}>
      <h4>{category}</h4>
      <ul className={`${className}__subcategory ${isActive ? 'menuOpen' : ''}`}>
        {renderSubs(subcategories)}
      </ul>
    </li>
  )
}

export default DropdownColumn;