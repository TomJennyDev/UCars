import BlankLayout from "layouts/BlankLayout";
import DashboardLayout from "layouts/dashboard/DashboardLayout";
import MainLayout from "layouts/main/MainLayout";
import NotFoundPage from "pages/NotFoundPage";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const routerMainLayout = [
  {
    path: "",
    index: true,
    element: lazy(() => import("pages/Home")),
  },
];

export const routerDashLayout = [
  {
    path: "brands",
    title: "car brands list",
    index: true,
    element: lazy(() => import("pages/Dashboard/BrandPage")),
  },
  {
    path: "brands/:id",
    title: "brand details",
    element: lazy(() => import("pages/Dashboard/BrandsDetailPage")),
  },
];

const renderRouters = (routers) => {
  return (
    <>
      {routers.map((route, idx) => {
        return (
          <Route
            key={idx}
            index={route.index}
            path={route.path}
            element={
              <Suspense fallback={<>{/* <LoadingPage /> */}</>}>
                <route.element title={route.title} />
              </Suspense>
            }
          />
        );
      })}
    </>
  );
};

function Router() {
  return (
    <Routes>
      <Route element={<BlankLayout />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        {renderRouters(routerMainLayout)}
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        {renderRouters(routerDashLayout)}
      </Route>
    </Routes>
  );
}

export default Router;
