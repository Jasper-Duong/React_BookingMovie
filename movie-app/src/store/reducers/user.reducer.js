


const DEFAULT_STATE = {
    userInfo:{}
}

export const userReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case "USER_UPLOAD":{
            state.userInfo = payload;

            return {...state}
        }
        default:
            return state;
    }
}