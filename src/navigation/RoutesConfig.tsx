import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { paths } from "./path";

const Fallback = () => <div className="h-full w-full bg-slate-100"></div>;

export default function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={paths.home}
          element={
            <Suspense fallback={<Fallback />}>
              <HomePage />
            </Suspense>
          }
        />

        <Route
          path="*"
          element={<Suspense fallback={<Fallback />}></Suspense>}
        />
      </Routes>
    </BrowserRouter>
  );
}
