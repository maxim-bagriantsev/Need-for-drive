import React from "react";

export const PriceOrder = (props) => {

//====При переходе на вкладку дополнительно, отображаем минимальную цену за выбранную марку авто=====//
    if (props.isVisible) {
        return (
            <div className='price-range'>
                <span className='price-range-title'>Цена:</span>
                {` ${props.priceMin.toLocaleString()}  ₽`}
            </div>
        )
    }
//===================================================================================================//
    return (
        <div className='price-range'>
            <span className='price-range-title'>Цена:</span>
            {props.selectedCar && ` от ${props.priceMin.toLocaleString()} до ${props.priceMax.toLocaleString()} ₽`}
        </div>
    )
}