import Home from "./pages/Home";
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Chat from "./pages/Chat";
import AppRoot from "./pages/AppRoot";
import Discound from "./pages/Discound";
import Calendar from "./pages/Calendar";
function App() {
  const routs = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Login /> },
        {
          path: "/home",
          element: <AppRoot />,
          children: [
            { path: "", element: <Home /> },
            {
              path: "account",
              element: <Account />,
            },
            {
              path: "chat",
              element: <Chat />,
            },
            {
              path: "account",
              element: <Account />,
            },
            {
              path: "discound",
              element: <Discound />,
            },
            {
              path: "calendar",
              element: <Calendar />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  document.documentElement.setAttribute("dir", "rtl");

  return (
    <>
      <RouterProvider router={routs} />
    </>
  );
}

export default App;
