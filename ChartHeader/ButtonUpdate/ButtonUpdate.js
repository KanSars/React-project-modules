import React from 'react';
import { Icon } from '../../Icon/Icon';
import PropTypes from 'prop-types';
import './buttonUpdate.scss';

export const ButtonUpdate = ({ onClick }) => {
    return (
        <button onClick={onClick} className="button-update main-text-1" type="button">
            <div className="button-update-container">
                <Icon iconName="update" width="24" height="24"/>
                <span>Update</span>
            </div>
        </button>
    )
}

ButtonUpdate.propTypes = {
    onClick: PropTypes.func
}
