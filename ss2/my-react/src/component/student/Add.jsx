import React, {useEffect, useRef, useState} from "react";
import {addNew, getAll} from "../../service/studentService.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";
import * as Yup from "yup";
import {getAllClasses} from "../../service/classServcice.js";


const Add = () => {
    const navigate =useNavigate();
    const [classList, setClassList] = useState([]);
    useEffect(() => {
        const fetData = async ()=>{
            const list = await getAllClasses();
            setClassList(list);
        }
        fetData();
    }, []);
    const handleAdd = (formValue) => {
        formValue = {
            ...formValue,
            classCG: JSON.parse(formValue.classCG)
        }
        addNew(formValue);

        navigate("/dashboard/student");
        toast.success('Thêm mới thành công',{
            // position: "bottom-right"
        });
    }
    const validation = Yup.object({
        id: Yup.number().typeError("Yêu cầu nhập số").required("Yêu cầu nhập")
            .min(1,"Id phải là số dương"),
        name: Yup.string().required("Yêu cầu nhập")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/,"Tên chưa đúng định dạng")
    })
    return (
        <>
            <Formik initialValues={{id: "", name:""}}
                    onSubmit={handleAdd}
                    validationSchema={validation}

            >
                <Form>
                    <h1>Thêm mới</h1>
                    <div>
                        <label>ID</label>
                        <Field  name ={'id'}/>
                        <ErrorMessage name={'id'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <label>Name</label>
                        <Field name = {'name'}/>
                        <ErrorMessage name={'name'} className={'text-danger'} component={'small'}/>
                    </div>
                    <div>
                        <label>Class name</label>
                        <Field as ="select" name ={'classCG'}>
                            <option value="">-------Chọn--------</option>
                            {classList.map(cls=>(
                                <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <Button type={'submit'}>Lưu</Button>
                    </div>
                </Form>
            </Formik>

        </>
    )
}
export default React.memo(Add);