import React from 'react';
import './step3.scss'
import {ColorRadioButton} from "./ColorRadioButton";
import {SelectDate} from "./SelectDate";
import {TariffRadioButton} from "./TariffRadioButton";
import {AdditionalRadioButton} from "./AdditionalChecbox";




export const Step3 = () => {
    return (
        <div className='step-three'>
            <div className='color-select'>
                <span>Цвет</span>
                <ColorRadioButton/>
            </div>
            <div className='date-select'>
                <p>Дата аренды</p>
                <div className='start-date'>
                    <span>С</span>
                    <SelectDate/>
                </div>
                <div className='end-date'>
                    <span>По</span>
                    <SelectDate/>
                </div>
            </div>
            <div className='select-tariff'>
                <span>Тариф</span>
                <div className='radio-btn-group'>
                    <TariffRadioButton/>
                </div>
            </div>
            <div className='select-additional-services'>
                <span>Доп услуги</span>
                <div className='radio-btn-group'>
                    <AdditionalRadioButton/>
                </div>
            </div>
        </div>
    )
}