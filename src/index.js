import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { 
  BrowserRouter ,
  Routes,
  Route
  } from "react-router-dom"


import Home from './routes';

//Admin
import AdminLogin from './routes/admin/AdminLogin';
import AdminSignUp from './routes/admin/AdminSignUp';
import AdminDashboard from './routes/admin/AdminDashboard'


//Client
import ClientDashboard from './routes/client/ClientDashboard'
import ClientLogin from './routes/client/ClientLogin';
import ClientSignUp from './routes/client/ClientSignUp';


import NotFound from './routes/NotFound'
import Roles from './routes/admin/Roles';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> }/>

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin/>} />
        <Route path="/admin/sign-up" element={<AdminSignUp/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/dashboard/roles/:role_id" element={<Roles/>} />

        {/* Client */}
        <Route path="/client/login" element={<ClientLogin/>} />
        <Route path="/client/sign-up" element={<ClientSignUp/>} />
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        

        <Route path="*" element={< NotFound />}/>  
        
      </Routes>
    </BrowserRouter>
  ,document.getElementById('root')
);

