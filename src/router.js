import { createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import Test from "./app/Test";
import LoginPage from "./app/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
