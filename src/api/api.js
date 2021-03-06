import React from 'react';
import axios from "axios";
import {urls} from './urls'

// передаем ключ в header
const axiosInstance = axios.create({
    withCredentials: true,
    headers: {
        'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
});

// получаем список городов
export const getAllTowns = () => {
    return axiosInstance.get(urls.cities())
}

// получаем список машин
export const getAllCars = () => {
    return axiosInstance.get(urls.cars())
}

// получаем список андресов
export const getAddress = () => {
    return axiosInstance.get(urls.address())
}

// получаем статус
export const getOrderStatus = () => {
    return axiosInstance.get(urls.orderStatus())
}

// получаем категории авто
export const getCategory = () => {
    return axiosInstance.get(urls.category())
}

export const getFilterCategory = (selectedCategoryId) => {
    return axiosInstance.get(urls.categoryId(selectedCategoryId))
}

// отправить заказ
export const postOrder = (order) => {
    return axiosInstance.post(urls.orderId(), order)
}









