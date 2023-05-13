import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const navigate = useNavigate();

    // dispatch logout action
    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        navigate('/login')
    }
    return { logout}

    // this is used in the component/navbar
}