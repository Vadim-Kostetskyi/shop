import React from 'react';

const Checkbox = ({ values }: { values: any[] }): JSX.Element => {
  return (
    <div className='checkbox'>
      {values.map((el, index) => (
        <label key={index} className='checkbox__label'>
          <input type="checkbox" value={el} className='checkbox__input' />
          <span>{el}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
