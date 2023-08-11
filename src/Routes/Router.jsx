import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Projectbanner from "../Components/Projectbanner";
import Projects from "../Pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/team",
        element: <Team></Team>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
    
    ]
  },
]);