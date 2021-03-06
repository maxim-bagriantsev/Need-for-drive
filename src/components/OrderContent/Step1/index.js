import React, {useEffect} from "react";
import {Search} from "./Search";
import './step1.scss';
import {useAllTowns} from "../../../hooks/useAllTowns";
import {useAllAddress} from "../../../hooks/useAllAddress";
import {Maps} from "./Map";
import {useDispatch, useSelector} from "react-redux";
import {useOrderStatus} from "../../../hooks/useOrderStatus";

export const Step1 = () => {
    useAllTowns()
    useAllAddress()
    useOrderStatus()

    const orderStatusId = useSelector((state) => {
        return state.reducerData.orderStatusId
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'SET_CURRENT_ORDER_PAGE', payload: 'SELECT_LOCATION'})
    }, [])

    return (
        <>
            <div className='step-one'>
                <Search/>
                <Maps/>
            </div>
        </>
    )
}

