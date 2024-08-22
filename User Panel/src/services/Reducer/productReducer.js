let initState = {
    products: []
};

const productReducer = (state = initState, action) => {

    switch (action.type) {

        case 'GET':
            return {
                ...state,
                products: action.payload
            }

        default:
            return state

    }

}

export default productReducer