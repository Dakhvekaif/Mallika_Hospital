import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './component/App' // Ensure this path matches your file structure
import Dashboard from './component/DashBoard/dashboard';
import ManageSpecialist from './component/DashBoard/managespecialist';
import ManageDoctor from './component/DashBoard/managedoctor';
import ManageAppointment from './component/DashBoard/manageappointment';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Dashboard /> */}
      {/* <ManageSpecialist /> */}
      {/* <ManageDoctor /> */}
      {/* <ManageAppointment /> */}
    </BrowserRouter>
  </StrictMode>,
)