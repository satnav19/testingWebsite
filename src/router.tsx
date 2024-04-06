import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import UserPanelPage from "./components/UserPanelPage";
import AdminPage from "./components/AdminPage"
import { createBrowserRouter } from "react-router-dom";
export default createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/SignUp",
    element: <SignUpPage />,
  },
  {
    path: "/UserPanel",
    element: <UserPanelPage />,
  },
  {
    path: "/AdminPage",
    element: <AdminPage/>
  }
]);
