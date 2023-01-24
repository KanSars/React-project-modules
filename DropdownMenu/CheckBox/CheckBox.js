import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './checkBox.scss';

export default function CheckBox ({content, setLabel, initialLabel, label}) {
  const [isChecked, setIsChecked] = useState(false);

  function removeParameter(label, content, initialLabel) {
    const labelInArray = label ? label.split(', ') : []; //split also helps to get rid of ', ' for further actions
    const indexForDeleting = labelInArray.indexOf(content);
    labelInArray.splice(indexForDeleting, 1);
    const result = labelInArray.join();

    return result ? result : initialLabel;
  }
  

  function addParameter(label, content) {
    return (label === initialLabel) ? content : `${label}, ${content}`;
  }

  useEffect(() => {
    if(isChecked) {
      setLabel(addParameter(label, content))  
    } else {
      setLabel(removeParameter(label, content, initialLabel))
    }
  }, [isChecked]);
  

  return (
    <label className='check'>
      <input
        className='input'
        type="checkbox"
        checked={isChecked}
        onChange={(e) => { setIsChecked(e.target.checked) }}
      />
      <span className='checkbox'></span>
      {content}
    </label>
  )
}

CheckBox.propTypes = { 
  content: PropTypes.string,
  label: PropTypes.string,
  initialLabel: PropTypes.string,
  setLabel: PropTypes.func,
}
