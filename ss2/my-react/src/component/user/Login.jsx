
import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {checkLogin} from "../../service/accountService.js";
import {useDispatch} from "react-redux";
import {login, loginSuccess} from "../../redux/action.js";

function Login() {
    const userInfo = null;
    const navigate = useNavigate();
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const dispatch = useDispatch();
    const  handleLogin=  async ()=>{
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        // const accountInfo = await checkLogin(username,password);
        // if (accountInfo){
        //     // dispatch ( accountInfo) lên store.
        //     dispatch(loginSuccess({
        //                                   username:accountInfo.username,
        //                                   role: accountInfo.role
        //                                   }));
        //     toast.success("Đăng nhập thành công")
        //     navigate("/")
        // }else {
        //     toast.error("Đăng nhập thất bại")
        // }

            let isSuccess = await dispatch(login({username,password}));
            if (isSuccess){
                toast.success("Đăng nhập thành công")
                navigate("/")
            }else {
                toast.error("Đăng nhập thất bại")
            }


    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">

                        <form className="card shadow p-4">
                            <h3 className="text-center mb-4">
                                Login {(userInfo != null) ? (userInfo?.username) : ''}
                            </h3>

                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    ref={usernameRef}
                                    name="username"
                                    className="form-control"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    ref={passwordRef}
                                    name="password"
                                    className="form-control"
                                />
                            </div>

                            <button
                                type="button"
                                className="btn btn-primary w-100"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );

}
export default Login ;