import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


const PrivateRoute = () => {
  const { userInfo } = useSelector(state => state.auth)
  return userInfo ? <Outlet />/*Display screen if not login*/ : 
    <Navigate to="/login" replace/*Replace any past history*/ />
}

export default PrivateRoute