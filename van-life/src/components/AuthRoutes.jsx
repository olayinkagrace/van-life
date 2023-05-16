import { Outlet, Navigate } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

function AuthRoutes() {
    const {user} = useAuthContext()
    if(!user){
        return <Navigate to='/login?message=You must log in first.' />
    }


  return (
    <Outlet />
  )
}

export default AuthRoutes
