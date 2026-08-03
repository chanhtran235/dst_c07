import './App.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./component/Header.jsx";
import List from "./component/student/List.jsx";

function App() {
    return (
        <>
            <Header/>
            <List/>
        </>
    )
}

export default App
