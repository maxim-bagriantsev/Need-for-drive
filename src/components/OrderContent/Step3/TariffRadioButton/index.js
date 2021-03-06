import React from "react";
import {radioBtnTariff} from "./const";
import {ItemRadioButton} from "./ItemRadioButton";
import './radioButtonTariff.scss';

export const TariffRadioButton = () => {

    const radioButtonTariff = radioBtnTariff.map((btn, id) => {

        return (
            <ItemRadioButton key={id}
                             id={btn.id}
                             text={btn.text}
            />
        )
    })
    return (
        <>
            <div className='button-radio-tariff'>
                <div className="form-group-tariff">
                    {radioButtonTariff}
                </div>
            </div>
        </>
    )
}
