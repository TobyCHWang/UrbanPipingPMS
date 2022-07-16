import { useLocalState } from "../../util/useLocalStorage";
import { Navigate } from "react-router-dom";

const AdminAndEmployeeRolePrivateRoute=({children}) =>{
    const [role,setRole] = useLocalState("","role");
   
    return role.userRole === "employee" || role.userRole === "admin"?children: <Navigate to="/acessFasle"/>;
    
}

export default AdminAndEmployeeRolePrivateRoute;