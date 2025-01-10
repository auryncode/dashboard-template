import { Route } from "react-router-dom";

export const renderRoutes = (routes) =>
  routes.map(({ path, element, children }, index) => (
    <Route key={index} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
