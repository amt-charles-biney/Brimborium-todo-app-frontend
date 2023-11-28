import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllTasks from "./components/outlets/allTasks";
import Overview from "./components/outlets/overview";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { useAppSelector } from "./redux/hooks";
import runOneSignal from "./utilities/oneSignal";

function App() {
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    user && runOneSignal(user.id);
  }, [user]);

  const root = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Dashboard /> : <Login />,
    },
    {
      path: "/",
      element: isAuthenticated ? <Dashboard /> : <Login />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "tasks",
          element: <AllTasks />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={root} />
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
}

export default App;
