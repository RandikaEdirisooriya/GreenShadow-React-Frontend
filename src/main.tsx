import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FieldPage from './Components/Pages/FieldPage/FieldPage.tsx';
import StaffPage from './Components/Pages/StaffPage/StaffPage.tsx';
import CropPage from './Components/Pages/CropPage/CropPage.tsx';
import EquipmentPage from './Components/Pages/EquipmentPage/EquipmentPage.tsx';
import VehiclePage from './Components/Pages/VehiclePage/VehiclePage.tsx';
import LogsPage from './Components/Pages/LogsPage/LogsPage.tsx';
import StaffFieldPage from './Components/Pages/StaffFieldPage.tsx';
import Home from './Components/Pages/HomePage/Home.tsx';

import { Provider } from 'react-redux';
import store from './store.ts';
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
  
)
