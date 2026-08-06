import {Link, NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/action.js";

const Header =()=>{
    const account = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className="nav-item px-xl-3">
                            <NavLink to={'/dashboard'} >Dashboard</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    {
                        (account==null)?(<Link className={'mx-lg-5'} to={'/login'}>Login</Link>):""
                    }

                    <span>{account?.username}</span>
                    {
                        (account !=null)?( <Button onClick={()=>{
                            dispatch(logout());
                        }} className={'btn btn-sm mx-lg-5'} >Logout</Button>):""
                    }


                </div>
            </div>
        </nav>
    )
}
export default Header;