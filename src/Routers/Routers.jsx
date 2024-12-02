import React from "react";
import { Routes, Route } from "react-router-dom";
import VotingPortal from "../Pages/EntryPage/VotingPortal";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<VotingPortal/>}/>
        </Routes>
    )
}

export default Routers;