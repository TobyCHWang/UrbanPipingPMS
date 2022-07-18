import { useLocalState } from "../../util/useLocalStorage";
import { Navigate } from "react-router-dom";
const AdminRolePrivateRoute=({children}) =>{
    const [role,setRole] = useLocalState("","role");
   
    return role.userRole === "admin"?children: <Navigate to="/acessFasle"/>;
    
}

export default AdminRolePrivateRoute;