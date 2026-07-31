import React, {Component} from "react";
import {getAll} from "../../service/studentService.js";
import DeleteComponent from "./DeleteComponent.jsx";

class ListComponent extends Component {
    constructor(props) {
        console.log("-------init---constructor run-----------------")
        super(props);
        this.state = {
            studentList : [],
            deleteStudent : {
                id: "100",
                name:"Tên sinh Viên "
            },
            showModal: false,
            isDeleteSuccess:false
        }
    }
    openModal = (student)=>{
        this.setState({
            showModal : true,
            deleteStudent : student
        });

    }
    closeModal = ()=>{
        this.setState({
            showModal : false,
        });
    }

    reloading =()=>{
        this.setState({
            studentList : [...getAll()]
        });
    }
    // changeDeleteSucces = ()=>{
    //     this.setState({
    //         isDeleteSuccess : true
    //     });
    // }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //    if (prevState.isDeleteSuccess!==this.state.isDeleteSuccess){
    //        this.setState({
    //            studentList : [...getAll()],
    //            isDeleteSuccess: false
    //        });
    //    }
    // }


    componentDidMount() {
        console.log("------------after render-----------");
        this.setState({
            studentList : [...getAll()]
        });
    }

    render() {
        return (
            <>
                {console.log("-----------list render-------------")}
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
                    {this.state.studentList.map((student,i)=>(
                        <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>
                                <button className={'btn btn-sm btn-danger'}
                                        onClick={()=>{
                                            this.openModal(student)
                                        }}>Xoá</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <DeleteComponent show ={this.state.showModal}
                                 student = {this.state.deleteStudent}
                                 close = {this.closeModal}
                                 reloading = {this.reloading}
                />
            </>
        );
    }
}
export default ListComponent;