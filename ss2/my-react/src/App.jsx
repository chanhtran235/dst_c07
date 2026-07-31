import './App.css'
import React from "react";
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ListComponent from "./class_component/student/ListComponent.jsx";
import Header from "./component/Header.jsx";

function App() {
    return (
        <>
            <Header/>
            <ListComponent/>
        </>
    )
}

export default App
