import Layouts from "../../layouts";
import SuspenceAnt from "../utils/SuspenceAnt";
import React from "react";
const Dashboard = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/dashboard",
        element: SuspenceAnt(React.lazy(() => import("../../pages/Dashboard"))),
      },
      {
        path: "/Bt",
        element: SuspenceAnt(React.lazy(() => import("../../pages/Bt"))),
      },
      {
        path: "/ref",
        element: SuspenceAnt(
          React.lazy(() => import("../../pages/useRefDemo/"))
        ),
      },
    ],
  },
];

export default Dashboard;
