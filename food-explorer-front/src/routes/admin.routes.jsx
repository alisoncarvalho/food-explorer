import {Routes , Route} from "react-router-dom"

import {Dish} from "../Pages/Dish"
import {NewDish} from "../Pages/NewDish"
import {EditDish} from "../Pages/EditDish"
import {Home} from "../Pages/Home"




export function AdminRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dish/:id" element ={<Dish/>} />
            <Route path="/newdish" element ={<NewDish/>} />
            <Route path="/editdish" element ={<EditDish/>} />
            

        </Routes>
    )
}
