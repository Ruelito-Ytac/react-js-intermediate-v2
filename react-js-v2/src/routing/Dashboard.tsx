import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <div>Dashboard</div>
            <Link to="/users">Users</Link>
        </>
    )
}

export default Dashboard;