import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus"
import TasksContext from "./tasks/tasksContext";

const NavBar = () => {
    const { task_list } = useContext(TasksContext);
    
    return (
        <>
            <ul>
                <li>{ task_list.length }</li>
                <li><LoginStatus /></li>
            </ul>
        </>
    )
}

export default NavBar