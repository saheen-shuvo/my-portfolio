import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogixShuvo from "../components/LogixShuvo";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
      path: "/logixshuvo",
      element: <LogixShuvo></LogixShuvo>,
    },
])