import './App.css'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./component/Header.jsx";
import List from "./component/student/List.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./component/home/Home.jsx";
import Add from "./component/student/Add.jsx";
import Dashboard from "./component/dashboard/Dashboard.jsx";
import {ToastContainer} from "react-toastify";
import Detail from "./component/student/Detail.jsx";
import Login from "./component/user/Login.jsx";

function App() {
    return (
        <>
            <Header/>
            <Routes>
               <Route path={'/'} element={<Home/>}/>
               <Route path={'/login'} element={<Login/>}/>
                <Route path={'/dashboard'} element={<Dashboard/>}>
                    <Route path={'student'} element={<List/>}/>
                    <Route path={'student/add'} element={<Add/>}/>
                    <Route path={'student/detail/:id'} element={<Detail/>}/>
                </Route>
            </Routes>
            <ToastContainer/>
        </>
    )
}

export default App
