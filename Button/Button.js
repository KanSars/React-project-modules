import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({btnStyle, children, onClick, style}) => {

    const styles = [
        'pink-primary',
        'purple-primary',
        'green-primary',
        'pink-secondary',
        'purple-secondary',
        'green-secondary',
        'pink-hover',
        'purple-hover',
        'green-hover',
        'pink-onclick',
        'purple-onclick',
        'green-onclick',
        'red-error',
        'gray-disabled'
    ];

    const setClassName = styles.includes(btnStyle) ? btnStyle : styles[0];

    return (
        <button className={`btn ${setClassName} ${style}`} type="submit" onClick={onClick}>{children}</button>
    )
}

Button.propTypes = {
    btnStyle: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.string,
}