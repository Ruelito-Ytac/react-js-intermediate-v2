import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
    { path: "/", element: <Dashboard /> },
    { path: "/users", element: <UserListPage /> },
    { path: "/contact", element: <ContactPage /> },
])

export default router;