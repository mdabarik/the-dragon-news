import {
    createBrowserRouter
}
from "react-router-dom";

import Home from "../layoutes/Home/Home";
import Root from '../layoutes/Root';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);


export default router;