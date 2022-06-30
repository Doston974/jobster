import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error, Landing, Register, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddJob, Profile, Stats, AllJobs } from "./pages/dashboard";
import SharedLayout from "./pages/dashboard/SharedLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
