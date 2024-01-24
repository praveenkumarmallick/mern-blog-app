import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import FooterComp from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Projects = lazy(() => import("./pages/Projects"));

const App = () => {
  return (
    <BrowserRouter>
      <Header />
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
        <Route element={<PrivateRoute />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Dashboard />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/projects"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;
