import { USER_SELECTED } from "../types/user.type"

const setUserInfoAction = (data) => {
    return {
        type: USER_SELECTED,
        paload: data
    }
}

export {setUserInfoAction};