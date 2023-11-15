import { BrowserRouter } from "react-router-dom";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";

import { useAuth } from "../hooks/auth";
import {USER_ROLES} from "../utils/roles"

export function Routes(){
    const { user } = useAuth()

    function AccessRoute(){
        switch(user.role){
            case USER_ROLES.ADMIN:
                return <AdminRoutes/>
            
            case USER_ROLES.CUSTOMER:
                return <CustomerRoutes/>
            default:
                return <CustomerRoutes/>
        }
    }
    return(
        <BrowserRouter>
            {user ? <AccessRoute/> : <AuthRoutes/>}
            
        </BrowserRouter>
    )
}