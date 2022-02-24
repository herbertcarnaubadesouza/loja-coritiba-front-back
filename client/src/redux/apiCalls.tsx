import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


//função de login
export const login = async (dispatch : any,user : any) => {
    dispatch(loginStart());

    try{
        const response = await publicRequest.post("/auth/login", user)
        //mandando as credenciais do login
        dispatch(loginSuccess(response.data))
    }catch(err){
        dispatch(loginFailure())
    }
}