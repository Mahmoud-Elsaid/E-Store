import { Navigate } from 'react-router-dom'
import toast from "react-hot-toast";


export default function ProtectedRote({children}) {

    if(localStorage.getItem("token")){
        return children
    }
    else
    {
        return <>
            <Navigate to='/login'/>
            {toast.error("please Login first")}
        </>
    }

}