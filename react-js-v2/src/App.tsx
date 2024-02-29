import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/Homepage";
import { AuthProvider } from "./state-management/auth";
import { TaskProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <NavBar />
        <HomePage />
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
