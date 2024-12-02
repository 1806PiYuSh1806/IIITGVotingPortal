import React from "react";
import { Routes, Route } from "react-router-dom";
import VotingPortal from "../Pages/EntryPage/VotingPortal";
import SignIn from "../Pages/SignInPage/SignIn";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<VotingPortal/>}/>
            <Route path="/signin" element={<SignIn/>}/>
        </Routes>
    )
}

export default Routers;