
import React, { useState, useContext } from 'react'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { UserContext } from '../../context/UserContext';
import img1 from "../../image/login-background/11zon_resized.png"
import img2 from "../../image/login-background/Picsart_22-10-05_14-14-02-869-min_11zon.png"
import img3 from "../../image/login-background/Picsart_22-10-05_14-14-49-990-min_11zon.png"
import img4 from "../../image/login-background/Picsart_22-10-05_14-15-37-652-min_11zon.png"
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [dept, setDept] = useState("");
    const navigate = useNavigate();
    const { setUserName, setUserRole, setUserLogin } = useContext(UserContext)




    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/login', {
                email,
                password,

            }).then((res) => {
                const user = res.data.user;
                localStorage.setItem("user", user.email);
                localStorage.setItem("user", user.role);
                setUserName(user.email);
                setUserRole(user.role);
                setUserLogin(true);

                toast.success("Login Successfully... ");
                if (user.role === "collector") {

                    navigate('/complain')
                } else if (user.role === "hod") {

                    navigate('/complain/hod/dept')
                } else {
                    navigate('/complainform')
                }
            })

        } catch (err) {

            toast.warn("Invalid Login credential ")

        }
    };
    return (

        <>
            <div className="background" style={{ position: "relative", zIndex: "1" }}>

                <MDBCarousel className='fluid"' style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <MDBCarouselItem

                        className='w-100  d-block'
                        itemId={1}
                        src={img1}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={2}
                        src={img2}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={img3}
                        alt='...'
                    />
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={img4}
                        alt='...'
                    />
                </MDBCarousel>
            </div>
            <div className=' d-flex flex-column align-items-center justify-content-center'  style={{ zIndex: "2", position: "relative", marginTop: "-30%" }}>


                <div className=' d-flex flex-column align-items-center justify-content-center pb-3' style={{ backgroundColor: "rgba(242, 242, 242, 0.5)", width:"800px" }}>
                    <p className="fs-1" style={{ color: "black" }}> Login</p>
                    <form className='d-flex flex-column align-items-center justify-content-center' style={{ zIndex: "5", width: "50%" }} onSubmit={handleSubmit}>
                        <div className="mb-3 w-100">
                            <input
                                type="email"
                                className="form-control"
                                placeholder='Email Id'
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={e => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="mb-3 w-100">
                            <input type="password"
                                className="form-control"
                                placeholder='Password'
                                id="exampleInputPassword1"
                                onChange={e => setPassword(e.target.value)}
                                required />
                        </div>

                        <button type="submit" className="btn btn-primary w-75 ">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
