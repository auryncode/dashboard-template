// import Layout from "@/layouts/layout";
import { lazy, Suspense } from "react";
import { renderRoutes } from "@/routes/render";
import { routesConfig } from "@/routes/config";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("@/layouts/layout"));
const NotFound = lazy(() => import("@/pages/notFound/index"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />}>{renderRoutes(routesConfig)}</Route>
      </Routes>
    </Suspense>
  );
}

export default App;
