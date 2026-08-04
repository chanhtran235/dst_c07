import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../../service/studentService.js";

const Detail = ()=>{
    const [student, setStudent] = useState();
    const {id} =useParams();
    useEffect(() => {
        const currentStudent = findById(id);
        setStudent(currentStudent);
    }, []);
    return (
        <>
        <h3>Chi tiết</h3>
            <p>ID: {student?.id} </p>
            <p>Name:{student?.name} </p>
        </>
    )

}
 export default Detail;