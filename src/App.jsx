import { Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import RootLayout from "./layouts/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// Layouts and pages 
import Activites from "./pages/Activites";
import Contactes from "./pages/Contactes";
import Faireundon from "./pages/Faireundon";
import Blog from "./pages/Blog";
import Mbolo from "./pages/Mbolo";

// Router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Mbolo />} />
      <Route path="activites" element={<Activites />} />
      <Route path="contactes" element={<Contactes />} />
      <Route path="blog" element={<Blog />} />
      <Route path="donner" element={<Faireundon />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
