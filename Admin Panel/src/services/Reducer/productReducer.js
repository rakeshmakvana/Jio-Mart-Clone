let initState = {
    products: []
};

const productReducer = (state = initState, action) => {

    switch (action.type) {

        case 'ADD':
            return {
                ...state,
                products: action.payload
            }

        case 'GET':
            return {
                ...state,
                products: action.payload
            }

        case 'UPDATE':
            return {
                ...state,
                products: action.payload
            }

        case 'DELET':
            return {
                ...state
            };

        default:
            return state

    }

}

export default productReducer