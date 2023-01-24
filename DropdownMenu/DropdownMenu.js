import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox/CheckBox';
import { RadioButton } from './RadioButton/RadioButton';
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Icon';
import {useDispatch, useSelector} from 'react-redux';
import './dropdownMenu.scss';
import { chartPeriodicDataAction } from '../../store/actions/chartPeriodicDataAction';

/**
* The component has four possible display types. To select one of them when creating a component, 
* specify the desired type in the props: "primary", "secondary", "vector icon", "icons".
* <DropdownMenu type="icon".../>
*
* It is possible to choose from two menu types: the checkbox menu and the radiobuttons menu. 
* To do this, set the isMultiselect={true} to select the checkbox menu 
* or set the isMultiselect={false} to select the radiobuttons menu.
* <DropdownMenu isMultiselect={false}.../>
**/

export default function DropdownMenu({isMultiselect = true, list, type, iconName, styles, alt = 'icon'}) {
  const isDarkModeEnabled = useSelector((state) => state.DarkMode)

  const [isActive, setIsActive] = useState(false);
  const [label, setLabel] = useState(list[0]);
  const onClick = () => {
      setIsActive(!isActive);
  }
    function toUpperCaseFirstLetter(label) {
      return !label ? label : `${label[0].toUpperCase()}${label.slice(1)}`;
    }

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(chartPeriodicDataAction(label))
    }, [label]);

  return (
      <div className="menu-container">
        <button onClick={onClick} className={`menu-trigger ${type}`} type="button">
          <div className="content-container">
            <Icon iconName={iconName} width='17' height='17' styles={styles} alt={alt}/>
            {((type === 'primary') || (type === 'secondary')) ? 
            <span className="label">{isMultiselect ? `${toUpperCaseFirstLetter(label)} price` : label}</span> : null}
            {((type === 'primary') || (type === 'icon-vector')) ? 
              <Icon iconName={isActive ? (!isDarkModeEnabled ? 'actionClose' : 'darkArrow') : (!isDarkModeEnabled ? 'actionOpen' : 'darkArrowOpen')} width='12' height='12'/> :
              null}
          </div>
        </button>
        <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
          
            <ul>
              {list.map((item) =>
                <li className="checkbox-container" key={item}>
                  {isMultiselect ?
                  <CheckBox content={item} setLabel={setLabel} initialLabel={list[0]} label={label}/> :
                  <RadioButton content={item} setLabel={setLabel} initialLabel={'Type of'} label={label}/>
                  }
                </li>
              )}
            </ul>
        </nav>
      </div>
  );
}

DropdownMenu.propTypes = { 
  list: PropTypes.arrayOf(PropTypes.string),
  type: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  styles: PropTypes.string,
  alt: PropTypes.string,
  isMultiselect: PropTypes.bool,
}