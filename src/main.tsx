import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FieldPage from './Components/Pages/FieldPage.tsx';
import StaffPage from './Components/Pages/StaffPage.tsx';
import CropPage from './Components/Pages/CropPage.tsx';
import EquipmentPage from './Components/Pages/EquipmentPage.tsx';
import VehiclePage from './Components/Pages/VehiclePage.tsx';
import LogsPage from './Components/Pages/LogsPage.tsx';
import StaffFieldPage from './Components/Pages/StaffFieldPage.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/field",
    element: <FieldPage />,
  },
  {
    path: "/staff",
    element: <StaffPage />,
  },
  {
    path: "/crop",
    element: <CropPage />,
  },
  {
    path: "/equipment",
    element: <EquipmentPage />,
  },
  {
    path: "/vehicles",
    element: <VehiclePage />,
  },
  {
    path: "/logs",
    element: <LogsPage />,
  },
  {
    path: "/stafffield",
    element: <StaffFieldPage />,
  }
 
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
