import './App.css'
import React from "react";
import {getAll} from "./service/studentService.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

    // const h1Element = React.createElement("h1", {style:{color:'yellow'}}, "Hello codegym");
    // const li1 = React.createElement("li", null, "HN");
    // const li2 = React.createElement("li", null, "HCM");
    // const li3 = React.createElement("li", null, "ĐN");
    // const ul = React.createElement("ul", null, li1, li2, li3)
    // const div = React.createElement("div", null, h1Element, ul);
    const handleDelete = ()=>{

    }
    const studentList = getAll();
    return (
        <>
           <h2>Danh sách sinh viên</h2>
            <table className={'table table-dark table-striped'}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {studentList.map((student,i)=>(
                    <tr key={student.id}>
                        <td>{i+1}</td>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>
                            <button onClick={handleDelete}>Xoá</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default App
