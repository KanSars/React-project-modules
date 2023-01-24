import React from 'react';
import PropTypes from 'prop-types';
import './radioButton.scss';

export const RadioButton = ({ content, setLabel, label }) => {
  return (
    <label className='radio'>
      <input 
        className='input'
        type="radio" 
        onChange={() => { setLabel(content) }}
        value={content}
        checked={content === label}
      />
      <span className='radioButton'></span>
      {content}
    </label>
  );
};

RadioButton.propTypes = { 
  content: PropTypes.string,
  setLabel: PropTypes.func,
  label: PropTypes.string,
}