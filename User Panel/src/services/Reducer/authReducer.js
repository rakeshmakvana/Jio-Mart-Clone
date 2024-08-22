let initState = {
    user: null,
    isLogin: false
};

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }

        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLogin: false
            }

        default:
            return state

    }

}

export default authReducer