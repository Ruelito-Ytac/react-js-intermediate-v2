import LoginStatus from "./auth/LoginStatus"
import useCounterStore from "./counter/store";

const NavBar = () => {
    const counter = useCounterStore(store => store.counter);
    
    return (
        <>
            <ul>
                <li>{ counter }</li>
                <li><LoginStatus /></li>
            </ul>
        </>
    )
}

export default NavBar