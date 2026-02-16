//Step1: Topic list -- Topic name, progress slider (0-100)
//Step 2: Note -- Expandable notes per topic, controlled textarea
//Step 3: Global state -- Context for topics, avoid prop drilling
//Step 4: Persistence -- LocalStorage OR indexDB
//Step 5: Insights -- "Topics not touched in 7 days", "Average progress"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/Homepage";
import Insight from "./pages/Insight";
import TopicDetail from "./pages/CreateTopic";
import CreateTopic from "./pages/CreateTopic";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/newtopic",
        element: <CreateTopic />,
      },
      {
        path: "/insight",
        element: <Insight />,
      },
      {
        path: "/note",
        element: <TopicDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
