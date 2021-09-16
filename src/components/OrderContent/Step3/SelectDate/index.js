import React from 'react';
import {DatePicker, Space} from 'antd';
import 'antd/dist/antd.css';
import './index.css';

function onChange(value, dateString) {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
    console.log('onOk: ', value);
}

export const SelectDate = () => {

    return (
        <Space direction="vertical" size={12}>
            <div>
                <DatePicker
                    showTime
                    onChange={onChange}
                    onOk={onOk}
                    placeholder='Введите дату и время'
                    format='DD.MM.YYYY. HH:mm'
                    size='small'
                />
            </div>
        </Space>
    )
}


