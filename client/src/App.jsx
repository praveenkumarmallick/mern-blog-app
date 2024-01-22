import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Projects = lazy(() => import("./pages/Projects"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/signin"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Projects />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
