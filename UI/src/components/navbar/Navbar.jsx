/* eslint-disable jsx-a11y/anchor-is-valid */

import axios from 'axios';
import React, {useContext} from 'react'
import Clock from 'react-live-clock';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

export default function NavBar() {
  const {userRole} = useContext(UserContext)
  const navigate = useNavigate()
  
  const logout =()=> {
    axios.get('/logout', ).then((res)=>{
navigate('/login')
    })
  }
  return (
    <nav className="navbar bg-light my-3" style={{ height: "fill-content", paddingRight: "2%", paddingLeft: "2%" }}>
      <div className="container">
        <a className="navbar-brand " href="#">
          <div className="d-flex align-items-center">
            <img src="https://ahmedabad.nic.in/wp-content/themes/district-theme-7/images/emblem-dark.png" alt="" width="20%" height="20%" className="d-inline-block align-text-top" />
            <div className="header-text px-4 mx-3 align-items-center">
              <h5 className='text-start'>જિલ્લા અમદાવાદ</h5>
              <h3 className='text-start'>District Ahmedabad</h3>
            </div>
          </div>
        </a>

        <div className="tital">
          <p>
            {userRole}
          </p>
        </div>

          <div className="clock">
            <div className="d-flex flex-column text-end position-relative bottom-0 end-0">
              <Clock format={"Do MMMM YYYY"} ticking={true}  />
              <Clock format={"ddd, h:mm:ss"} ticking={true} />

            </div>
          </div>
          <div className="button">
            <button className='btn' onClick={logout}>logout</button>
          </div>
      </div>
    </nav>
  )
}

