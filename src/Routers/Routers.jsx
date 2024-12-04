import React from "react";
import { Routes, Route } from "react-router-dom";
import VotingPortal from "../Pages/EntryPage/VotingPortal";
import SignIn from "../Pages/SignInPage/SignIn";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import OTPVerification from "../Pages/OTPVerification/OTPVerification";
import ChangePassword from "../Pages/ChangePassword/ChangePassword";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SGCElections from "../Pages/SGCElections/SGCElections";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<VotingPortal/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/forgot-password" element={<ForgotPassword/>}/>
            <Route path="/forgot-password/otp-verification" element={<OTPVerification/>}/>
            <Route path="/forgot-password/password-change" element={<ChangePassword/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/sgcElections" element={<SGCElections/>}/>
        </Routes>
    )
}

export default Routers;