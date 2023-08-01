import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_COMPONENT } from "./constants/routeComponent.constant";
import Test from "./components/Test";

function App() {
  const { home, lab } = ROUTE_COMPONENT;
  const { expenseManager, userManager } = home.children;
  const router = createBrowserRouter([
    {
      path: "/",
      element: home.component(),
      children: [
        {
          path: userManager.path,
          element: userManager.component(),
        },
        {
          path: expenseManager.path,
          element: expenseManager.component(),
          children: [
            {
              path: expenseManager.children.dashboard.path,
              element: expenseManager.children.dashboard.component(),
            },
            {
              path: expenseManager.children.expenseType.path,
              element: expenseManager.children.expenseType.component(),
            },
            {
              path: expenseManager.children.expenseCategory.path,
              element: expenseManager.children.expenseCategory.component(),
            },
            {
              path: expenseManager.children.expense.path,
              element: expenseManager.children.expense.component(),
            },
          ],
        },
      ],
    },
    { path: "/test", element: Test() },
    { path: lab.path, element: lab.component() },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
