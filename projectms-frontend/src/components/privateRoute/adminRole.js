import { useLocalState } from "../../util/useLocalStorage";

const AdminRolePrivateRoute=({children}) =>{
    const [role,setRole] = useLocalState("","role");
   
    return role.userRole === "admin"?children: alert("you don't have access");
    
}

export default AdminRolePrivateRoute;