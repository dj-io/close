import { Navigate, Outlet } from "react-router-dom";
import { Signin, Signup } from '../../../components/index.ts';
import { useAuth } from "../../hooks/UseAuth.tsx";

interface IProtected {

}

export const Protected: React.FC<IProtected> = ({ hasAccount }) => {
    const isAuth = useAuth();

    return isAuth ?
        <Outlet /> :
        hasAccount ?
            <Signin /> :
            <Signup />;

}