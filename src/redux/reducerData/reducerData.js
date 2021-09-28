const initialState = {
    townData: null,
    carData: null,
    addressData: null,
    selectedTown: '',
    selectedStreetAndHouse: '',
    selectedCar: null,
    selectedColor: null
};

export const reducerData = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_TOWNS':
            return {...state, townData: action.payload}
        case 'GET_ALL_CARS':
            return {...state, carData: action.payload}
        case 'GET_ALL_ADDRESS':
            return {...state, addressData: action.payload}
        case 'SELECT_TOWN':
            return {...state, selectedTown: action.payload}
        case 'SELECT_STREET_AND_HOUSE':
            return {...state, selectedStreetAndHouse: action.payload}
        case 'SELECT_CAR':
            return {...state, selectedCar: action.payload}
        case 'SELECT_COLOR':
            return {...state, selectedColor: action.payload}
        default:
            return state
    }
}
