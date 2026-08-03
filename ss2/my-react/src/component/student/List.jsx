import DeleteComponent from "../../class_component/student/DeleteComponent.jsx";
import React, {useCallback, useEffect, useState} from "react";
import {getAll} from "../../service/studentService.js";
import Delete from "./Delete.jsx";
import Add from "./Add.jsx";

const List = ()=>{
    const [studentList, setStudentList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [isReloading, setIsReloading] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({
        id:"",
        name:""
    });
    useEffect(() => {
        console.log("-----------effect------------");
        setStudentList([...getAll()])
    },[isReloading]);
    const openModal =(student)=>{
      setShowModal(true);
      setDeleteStudent(student);
    }

    const closeModal= useCallback(()=>{
        setShowModal(false);
    },[])

    return (
        <>
            {console.log("-----------list render-------------")}
            <h2>Danh sách sinh viên</h2>
            <Add  setIsReloading = {setIsReloading} />
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
                            <button className={'btn btn-sm btn-danger'}
                                    onClick={()=>{
                                        openModal(student)
                                    }}>Xoá</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Delete show ={showModal}
                             student = {deleteStudent}
                             close = {closeModal}
                    setIsReloading = {setIsReloading}
            />
        </>
    );
}
export default List;