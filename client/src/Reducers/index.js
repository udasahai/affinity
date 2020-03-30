export default (state, action) => {
    console.log(action)
    console.log(state)
    switch (action.type) {
        case "SET_DETAILS":
            return {
                ...state,
                username: action.payload.username,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email
            }

        default:
            return state
    }

}
