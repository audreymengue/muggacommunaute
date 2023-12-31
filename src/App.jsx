import { Box } from "@chakra-ui/react";
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
import Directives from "./pages/Directives";
import Mbolosamba from "./pages/Mbolosamba";

// Router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Mbolosamba />} />
      <Route path="activites" element={<Activites />} />
      <Route path="donner" element={<Faireundon />} />
      <Route path="contactes" element={<Contactes />} />
      <Route path="directives" element={<Directives />} />

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
