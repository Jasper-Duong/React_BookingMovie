
let userInfo = localStorage.getItem("USER_INFO_KEY");

if(userInfo){
    userInfo = JSON.parse(userInfo);
}

const DEFAULT_STATE = {
    userInfo,
    userSelected:{},
}

export const userReducer = (state = DEFAULT_STATE, {type, payload}) => {
    switch (type) {
        case "USER_UPLOAD":{
            state.userInfo = payload;

            return {...state};
        }
        case "USER_SELECTED": {
            state.userSelected = payload;

            return {...state};
        }
        default:
            return state;
    }
}