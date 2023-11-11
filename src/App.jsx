import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Leaderboard from "./components/leaderboards/Leaderboards";

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
