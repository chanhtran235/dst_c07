import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../../service/studentService.js";

class DeleteComponent extends Component {
    constructor(props) {
        super(props)
    }

    handleClose = () => {
        this.props.close();
    }

    handelDelete = () => {
        deleteById(this.props.student.id);
        this.props.reloading();
        this.props.close();
    }

    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>Bạn có muốn xoá sinh viên {this.props.student.name}</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handelDelete}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default DeleteComponent;