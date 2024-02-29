import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface LoginAction {
    type: "LOGIN";
    username: string;
}

interface LogoutAction {
    type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducers = (state: string, action: AuthAction): string => {
    if(action.type === "LOGIN" && action.username)  return action.username;
    if(action.type === "LOGOUT") return "";

    return state;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [username, dispatch] = useReducer(authReducers, "");

    return (
        <AuthContext.Provider value={{ username, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider