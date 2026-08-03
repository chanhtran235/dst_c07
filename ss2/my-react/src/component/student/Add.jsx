import React, {useRef} from "react";
import {addNew, getAll} from "../../service/studentService.js";


const Add = ({setIsReloading}) => {
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const handleAdd = () => {
        const newStudent = {
            id: idRef.current.value,
            name: nameRef.current.value,
        }
        addNew(newStudent);
        idRef.current.value = "";
        nameRef.current.value = ""
        console.log(getAll());
        setIsReloading(pre => !pre);
    }
    return (
        <>
            {console.log("-----add-----------")}
            <div className={'w-50'}>
                <h1>Thêm mới</h1>
                ID: <input ref={idRef}/>
                Name: <input ref={nameRef}/><br/>
                <button onClick={handleAdd}>Lưu</button>
            </div>

        </>
    )
}
export default React.memo(Add);