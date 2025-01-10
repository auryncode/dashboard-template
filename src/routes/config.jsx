import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/dashboard/index"));
const About = lazy(() => import("@/pages/analytics/index"));
const Forms = lazy(() => import("@/pages/forms/index"));
const Table = lazy(() => import("@/pages/table/index"));
const Settings = lazy(() => import("@/pages/settings/index"));
const Analytics = lazy(() => import("@/pages/analytics/index"));

export const routesConfig = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    meta: { title: "Home", requiresAuth: false },
  },
  {
    path: "/about",
    element: <About />,
    meta: { title: "About", requiresAuth: false },
  },
  {
    path: "/forms",
    element: <Forms />,
    meta: { title: "Forms", requiresAuth: false },
  },
  {
    path: "/table",
    element: <Table />,
    meta: { title: "Table", requiresAuth: false },
  },
  {
    path: "/settings",
    element: <Settings />,
    meta: { title: "Settings", requiresAuth: false },
  },
  {
    path: "/analytics",
    element: <Analytics />,
    meta: { title: "Analytics", requiresAuth: false },
  },
];
