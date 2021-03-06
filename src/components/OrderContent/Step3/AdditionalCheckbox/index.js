import React from "react";
import {FullTankCheckbox} from "./FullTankCheckbox";
import {RightDriveCheckbox} from "./RightDriveCheckbox";
import {BabyChairCheckbox} from "./BabyChairCheckbox";
import './index.css';

export const AdditionalServices = () => {

    return (
        <>
            <div className='checkbox'>
                <FullTankCheckbox/>
                <BabyChairCheckbox/>
                <RightDriveCheckbox/>
            </div>
        </>
    )
}