
import { Navigate, Outlet } from "react-router-dom"
import React from "react";


const ProtectedRoutes=({
    canPass,
    redirectPath='/'
}
)=>{

    if(!canPass){
        return <Navigate to={redirectPath} replace/> 
    }
    
    return <Outlet/>
}


export {ProtectedRoutes}