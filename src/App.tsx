import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AnimatedPage from "./components/AnimatedPage";
import AnimatedRouterProvider from "./components/AnimatedRouterProvider";
import Note from "./pages/note";
import SingleNote from "./pages/note/SingleNote";
import Home from "./pages";

// Layout component to wrap all routes
const Layout: React.FC = () => {
  return (
    <AnimatedRouterProvider>
      <AnimatedPage>
        <Outlet />
      </AnimatedPage>
    </AnimatedRouterProvider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path : '',
        element : <Home />
      },
      {
        path: "auth/login",
        element: <Login />,
      },
      {
        path: "auth/register",
        element: <Register />,
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "note/:id",
        element: <SingleNote />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
