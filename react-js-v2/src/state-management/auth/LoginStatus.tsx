import React, { useContext } from "react";
import AuthContext from "./authContext";

const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
    const { username, dispatch } = useAuth();

    return (
        <React.Fragment>
            { !username && <button type="button" onClick={ () => dispatch({ type: "LOGIN", username: "Ruelito Ytac" }) }>Login</button> }
            { username &&
                <>
                    <span>{ username }</span>
                    <button type="button" onClick={ () => dispatch({ type: "LOGOUT" }) }>Logout { username }</button>
                </>
            }
        </React.Fragment>
    )
}

export default LoginStatus