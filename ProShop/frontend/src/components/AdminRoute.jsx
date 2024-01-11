import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"


const AdminRoute = () => {
  const { userInfo } = useSelector(state => state.auth)
  return userInfo && userInfo.isAdmin ? <Outlet />/*Display screen if not login*/ : 
    <Navigate to="/login" replace/*Replace any past history*/ />
}

export default AdminRoute