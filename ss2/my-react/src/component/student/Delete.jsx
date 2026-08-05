import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";
import React from "react";
import {toast} from "react-toastify";

const Delete = ({show,close,student,setIsReloading})=>{

    const handelDelete = ()=>{
        const fetData = async ()=>{
            const isDelete = await deleteById(student.id);
            if (isDelete){
                setIsReloading(pre =>!pre);
                toast.success(" Xoá thành công!!!");
            }else {
                toast.error(" Xoá không thành công!!!");
            }
            close();

        }
        fetData();

    }
    return (
        <>
            {console.log("----------delete--------------------")}
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>Bạn có muốn xoá sinh viên {student.name}</span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handelDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default React.memo(Delete);