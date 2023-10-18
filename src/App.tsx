import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { useAppSelector } from "./redux/hooks";
import Overview from "./components/overview";

function App() {
  const authenticated = useAppSelector((state) => state.isAuthenticated);
  const root = createBrowserRouter([
    {
      path: "/",
      element: authenticated ? <Dashboard /> : <Login />,
    },
    {
      path: "/",
      element: authenticated ? <Dashboard /> : <Login />,
      children: [
        {
          index: true,
          element: <Overview />,
        },
      ],
    },
  ]);
  return <RouterProvider router={root} />;
}

export default App;
