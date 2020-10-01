const authState = {
    currentUser: {
        isAuthenticated: false
    }
}

const authReducer = (state = authState, { type, payload }) => {


    switch (type) {

        case 'login':
            
            return { ...state, currentUser: { ...payload, isAuthenticated: true } };
        case 'logout':

            return { ...state, currentUser: { isAuthenticated: false } };


        default:
            return state;

    }


}

export default authReducer;