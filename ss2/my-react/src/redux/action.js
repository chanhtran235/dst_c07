import {checkLogin} from "../service/accountService.js";

export const loginSuccess = (account)=>{
    return {
        type: "LOGIN",
        payload: account
    }
}

export const login = (account)=>{
    return async (dispatch)=>{
        // all api
        const accountInfo = await checkLogin(account.username,account.password);
        if (accountInfo){
            dispatch(loginSuccess({
                username:accountInfo.username,
                role: accountInfo.role
            }));
            return true;
        }
        return false;

    }
}

export const logout = ()=>{

    return {
        type: "LOGOUT"
    }
}
