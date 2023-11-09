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
import Joindre from "./pages/Joindre";
import Mbolosamba from "./pages/Mbolosamba";

// Router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="mbolosamba" element={<Mbolosamba />} />
      <Route path="activites" element={<Activites />} />
      <Route path="contactes" element={<Contactes />} />
      <Route path="blog" element={<Blog />} />
      <Route path="donner" element={<Faireundon />} />
    </Route>
  )
)

function App() {

  return (
    <Box bg="gray.50">
      <RouterProvider router={router} />
    </Box>
  );
}

export default App;
