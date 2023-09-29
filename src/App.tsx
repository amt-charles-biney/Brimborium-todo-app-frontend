import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";

function App() {
  const root = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={root} />;
}

export default App;
