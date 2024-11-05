// Dependency
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// CSS
import "./App.css";
// Components
import AppLayout from "./components/Layouts/AppLayout";
import LandingPage from "./components/Pages/LandingPage";
import Onboarding from "./components/Pages/Onboarding";
import JobListing from "./components/Pages/JobListing";
import Job from "./components/Pages/Job";
import SavedJob from "./components/Pages/SavedJob";
import PostJob from "./components/Pages/PostJob";
import MyJobs from "./components/Pages/MyJobs";
import { ThemeProvider } from "./components/ThemeProvider";
import { ProtectedRoute } from "./components/Partials/ProtectedRoute";

const router = createBrowserRouter([
  {
    // We can add a Layout file or we can also directly add the <Outlet /> below to make our routes successfully work.
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
