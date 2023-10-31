import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import { useAppSelector } from "./redux/hooks";
import Overview from "./components/overview";
import { Toaster } from "react-hot-toast";

function App() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
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
