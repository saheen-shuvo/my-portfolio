import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import LogixShuvo from "../components/LogixShuvo";
import Shuvolingo from "../components/Shuvolingo";
import BorolokerGadget from "../components/BorolokerGadget";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    },
    {
      path: "/logixshuvo",
      element: <LogixShuvo></LogixShuvo>,
    },
    {
      path: "/shuvolingo",
      element: <Shuvolingo></Shuvolingo>,
    },
    {
      path: "/borolokergadget",
      element: <BorolokerGadget></BorolokerGadget>,
    },
])