import React from "react";
import useAuthStore from "./auth_store";


const LoginStatus = () => {
    const { username, login, logout } = useAuthStore();

    return (
        <React.Fragment>
            { !username && <button type="button" onClick={ () => login("Ruelito Ytac") }>Login</button> }
            { username &&
                <>
                    <span>{ username }</span>
                    <button type="button" onClick={ () => logout() }>Logout { username }</button>
                </>
            }
        </React.Fragment>
    )
}

export default LoginStatus