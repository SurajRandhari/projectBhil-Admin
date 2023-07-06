import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center content">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="images/blog3.png"
                className="img-fluid"
                alt="Sample "
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form
                method="post"
                action="https://futuresfoundry.com/demo/vainavin/Login/dologin"
                id="login"
                name="login"
              >
                {/* 
                    <!-- Email input --> */}
                <div className="form-outline mb-4  is-valid">
                  <input
                    type="text"
                    required
                    id="form3Example3"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Username"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Username
                  </label>
                  <span className="fas fa-lock"></span>
                </div>

                {/* <!-- Password input -->  */}
                <div className="form-outline mb-3  is-valid">
                  <input
                    type="password"
                    required
                    id="form3Example4"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <span className="fas fa-lock"></span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                 
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link to="/admin" 
                    className="btn btn-primary btn-lg small fw-bold"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </Link>
                 
                </div>
              </form>
            </div>
        </div>
        </div>
       </section>
    </div>
  )
}

export default Login