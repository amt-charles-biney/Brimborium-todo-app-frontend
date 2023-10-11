import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { useAppSelector } from "./redux/hooks";

function App() {
  const authenticated = useAppSelector((state) => state.isAuthenticated);
  const root = createBrowserRouter([
    {
      path: "/",
      element: authenticated ? <Dashboard /> : <Login />,
    },
    {
      path: "/dashboard",
      element: authenticated ? <Dashboard /> : <Login />,
    },
  ]);
  return <RouterProvider router={root} />;
}

export default App;
