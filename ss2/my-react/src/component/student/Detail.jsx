import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById, getAll} from "../../service/studentService.js";

const Detail = ()=>{
    const [student, setStudent] = useState();
    const {id} =useParams();
    useEffect(() => {
        const fetData = async ()=>{
            const student = await findById(id);
            setStudent(student);
        }
        fetData();

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