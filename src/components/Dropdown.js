import React from 'react';
import './Dropdown.css';
import DropdownColumn from './DropdownColumn';

const Dropdown = ({className, content}) => {

  const renderColumns = columns => columns.map((column, idx) => {
    const {
      category,
      subcategories
    } = column;
    return(
      <DropdownColumn
        key={idx}
        className={className}
        category={category}
        subcategories={subcategories}
      />
    )
  });

  return (
    <nav>
      <ul className={className}>
        {renderColumns(content)}
      </ul>
    </nav>
  )
}


export default Dropdown;