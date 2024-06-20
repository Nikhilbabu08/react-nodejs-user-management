import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CheckAuth = (Component)=>{
    const Wrapper =(props) =>{
        const user=useSelector(store=>store.auth.user)
        const navigate = useNavigate();
        useEffect(()=>{
            if(!user){
                navigate('/login')
            }
        },[user])
        return <Component {...props} />;
    }
    return  Wrapper;
}

export default CheckAuth