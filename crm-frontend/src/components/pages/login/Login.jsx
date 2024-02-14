import React from 'react'
import './Login.css'
import Header from '../../common/header/Header.jsx'
import Footer from '../../common/footer/Footer.jsx'
function Login() {
  return (
    <>
      <Header />

      {/* login mid part */}
      <div className="loginMidWrapper">
        <div className="d-flex">
          {/* <div className="col-6">
            <div className="welcome"></div>
          </div> */}
          <div className="col-12 loginRight">
            <div className="loginBox col-5">
              <p>LOGIN</p>
              <label htmlFor="">Username</label>
              <input type="text" name="" id="" className='form-control' />
              <label htmlFor="">Password</label>
              <input type="password" name="" id="" className='form-control' />
              <button className='btn btn-success loginButton col-5'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login