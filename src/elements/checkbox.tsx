import React from 'react';

const Checkbox = ({ values }: { values: any[] }): JSX.Element => {
  return (
    <div>
      {values.map((el, index) => (
        <label key={index}>
          <input type="checkbox" name="hobby" value={el} />
          {el}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
