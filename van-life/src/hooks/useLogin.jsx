import { useState } from "react";
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
    const navigate = useNavigate();

    const [error, setError] = useState(null)
    // isloading is used on buton
    const [isLoading, setIsloading] = useState(null)
    const {dispatch} = useAuthContext()


    const login = async (email, password) => {
        setIsloading(true)
        setError(null)

        const response = await fetch('https://vanlife-564b.onrender.com/api/host/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsloading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save the user to local storage

            localStorage.setItem('user', JSON.stringify(json))

        // update the auth context
        dispatch({type: 'LOGIN', payload: json})
        setIsloading(false)
        navigate('/')
        }
    }
    return{ login, isLoading, error}
}
