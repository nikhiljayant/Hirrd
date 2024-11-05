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

const router = createBrowserRouter([
  {
    // We can add a Layout file or we can also directly add the <Outlet /> below to make our routes successfully work.
    element: <AppLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/onboarding", element: <Onboarding /> },
      { path: "/jobs", element: <JobListing /> },
      { path: "/job/:id", element: <Job /> },
      { path: "/post-job", element: <PostJob /> },
      { path: "/saved-jobs", element: <SavedJob /> },
      { path: "/my-jobs", element: <MyJobs /> },
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
