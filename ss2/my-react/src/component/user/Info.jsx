import {useSelector} from "react-redux";

function Info() {

    const account = useSelector(state =>state.user);

    if (!account) {
        return (
            <div className="alert alert-warning">
                Chưa đăng nhập
            </div>
        );
    }

    return (
        <div className="card shadow-sm mt-3">
            <div className="card-header bg-primary text-white">
                Thông tin tài khoản
            </div>

            <div className="card-body">
                <div className="row mb-3">
                    <label className="col-sm-3 fw-bold">
                        Name
                    </label>

                    <div className="col-sm-9">
                        {account?.username}
                    </div>
                </div>

                <div className="row">
                    <label className="col-sm-3 fw-bold">
                        Role
                    </label>

                    <div className="col-sm-9">
                        <span className="badge bg-success">
                            {account?.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;