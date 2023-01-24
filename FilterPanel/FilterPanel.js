import React from 'react';
import {CurrencyDropDownMenu} from '../CurrencyDropDownMenu/CurrencyDropDownMenu';
import {SelectCurrencyComponent} from '../SelectCurrencyComponent/SelectCurrencyComponent';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

import './filterPanel.scss';

const period = ['Hour', 'Day', 'Week', 'Month', 'Year'];

export const FilterPanel = () => {
    return (
        <div className='filter margin-bottom-s'>
            <div className='filter'>
                <DropdownMenu isMultiselect={false} type="primary" list={period} iconName="period" />
            </div>
            <div className='filter'>
                <CurrencyDropDownMenu icon='currency'>
                    <SelectCurrencyComponent />
                </CurrencyDropDownMenu>
            </div>
        </div>
    )
}