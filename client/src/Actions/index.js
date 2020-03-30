export const SET_DETAILS = "SET_DETAILS";


export function setUserDetails(details) {
    return {
        "type": "SET_DETAILS",
        "payload": {
                username: details.username,
                firstName: details.firstName,
                lastName: details.lastName,
                email: details.email
        }
    }
}
