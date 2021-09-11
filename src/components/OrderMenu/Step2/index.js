import React from 'react';
import {RadioButton} from "./RadioButton";
import './step2.scss'
import {Cars} from './Cars'


export const Step2 = () => {
    return (
        <div className='step-two'>
            <RadioButton/>
            <Cars/>
        </div>
    )
}