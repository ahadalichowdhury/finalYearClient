import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {getToken} from "./Helper/sessionHelper";
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import SendOTP from './pages/SendOTP';
import VerifyOTP from "../src/accountRecover/VerifyOTP";
import CreatePassword from "../src/accountRecover/CreatePassword";
function App() {
 if(getToken()){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
 }else{
  return (
    <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Navigate to="/login" replace />} />
       <Route exact path="/Login" element={<LoginPage />} />
             <Route exact path="/Registration" element={<RegistrationPage />} />
            <Route exact path="/SendOTP" element={<SendOTP />} />
            <Route exact path="/VerifyOTP" element={<VerifyOTP />} />
            <Route exact path="/CreatePassword" element={<CreatePassword />} />

       <Route path="*" element={<NotFoundPage />} />

       </Routes>
    </BrowserRouter>
  )
 }
}

export default App;
