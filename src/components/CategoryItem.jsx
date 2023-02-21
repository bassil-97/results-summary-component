import React from 'react';
import "./CategoryItem.css";

function CategoryItem({ category, score, icon, bgClass, textClass }) {
  return (
    <div className={`category-item__container ${bgClass}`}>
        <div className={`category-title ${textClass}`}>
            <img src={icon} alt={category} />
            <h3>{category}</h3>
        </div>
        <h3 className='score'>{score} <span className='text-muted'>/ 100</span></h3>
    </div>
  )
}

export default CategoryItem;