import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import MainPage from "./components/MainPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage/>,
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
