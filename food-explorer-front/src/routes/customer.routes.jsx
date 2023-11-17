import {Routes , Route} from "react-router-dom"

import {Dish} from "../Pages/Dish"

import {Home} from "../Pages/Home"
import {NotFound} from "../Pages/NotFound"






export function CustomerRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dish/:id" element ={<Dish/>} />
            
            <Route path="*" element ={<NotFound/>} />
            

        </Routes>
    )
}
