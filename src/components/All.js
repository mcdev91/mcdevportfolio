import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Header from "../components/Header";
import Resume from "../components/Resume";

const All = () => {
    return (
        <div>
            <div className="content">
                <Route path="/" component={Header} />
                <Route path="/stuff" component={Resume} />
            </div>
        </div>
    )
}

export default All;