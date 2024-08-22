let initState = {
    cartItems: []
};

const cartReducer = (state = initState, action) => {

    switch (action.type) {

        case 'SET':
            return {
                ...state,
                cartItems: action.payload
            }

        case 'ADD':
            return {
                ...state,
                cartItems: action.payload
            }

        case 'REMOVE':
            return {
                ...state
            }

        case 'CLEAR':
            return {
                ...state,
                cartItems: []
            }

        case 'INCREMENT':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };

        case 'DECREMENT':
            return {
                ...state,
                cartItems: state.cartItems.map(item =>
                    item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
                )
            };

        default:
            return state

    }

}

export default cartReducer