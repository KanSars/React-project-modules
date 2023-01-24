import React from 'react';
import { ButtonUpdate } from './ButtonUpdate/ButtonUpdate';
import PropTypes from 'prop-types';

import './chartHeader.scss';

export const ChartHeader = ({currency, chartData}) => {
    const indexOfLastDate = chartData.currencies.length-1;

    function getFormattedDate(date) {
        const newDate = new Date(date)
        const monthNames = [ 
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
        ];

        return `${newDate.getDate()} ${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`
    }
    
    return (
        <header className="chartheader">
            <div className="container">
                <div className="container-title">
                    <span className="header-2 head-text">{`${currency.base}/${currency.quoted} chart`}</span>
                    <span className="main-text-1 main-text">
                        {`${getFormattedDate(chartData.currencies[0].date)} - ${getFormattedDate(chartData.currencies[indexOfLastDate].date)}`}
                        </span>
                </div>
                <ButtonUpdate/>
            </div>
        </header>
    )
}

ChartHeader.propTypes = {
    currency: PropTypes.object,
    chartData: PropTypes.object,
}