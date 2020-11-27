import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import homeLogo from '../../Images/home-logo.jpg'
import './Login.css';

const Login = () => {
  const [user, setUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();
  /* const [action, setAction] = useState({}); */
  const history = useHistory();

  const onSubmit = (data) => {
    setUser(data.text);
    history.push(`/certificate/${user}`);
  };
  return (
    <section className="login-section">
      <div className="container">
        <div className="row login-form">
          <div className="col-md-4">
          <img src={homeLogo} alt="" />
          </div>

          <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group row">
                <label
                  htmlFor="name"
                  className="col-sm-2 col-md-4 col-form-label"
                >
                  নাম
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    ref={register({ required: true })}
                    name="text"
                    placeholder="Enter your name"
                  />
                </div>
                {errors.text && (
                  <span className="text-danger">
                    This field must be required
                  </span>
                )}
              </div>

              <div className="form-group row">
                <label
                  htmlFor="number"
                  className="col-sm-2 col-md-4 col-form-label"
                >
                  মোবাইল নাম্বার
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    className="form-control"
                    type="text"
                    ref={register({ required: true })}
                    name="number"
                    placeholder="Mobile number here"
                  />
                </div>
                {errors.text && (
                  <span className="text-danger">
                    This field must be required
                  </span>
                )}
              </div>

              <div className="form-group row">
                <label
                  htmlFor="email"
                  className="col-sm-2 col-md-4 col-form-label"
                >
                  ইমেইল
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    className="form-control"
                    type="email"
                    ref={register({ required: true })}
                    name="email"
                    placeholder="Email address here"
                  />
                </div>
                {errors.text && (
                  <span className="text-danger">
                    This field must be required
                  </span>
                )}
              </div>

              <div className="form-group row">
                <label
                  htmlFor="email"
                  className="col-sm-2 col-md-4 col-form-label"
                >
                  ঠিকানা
                </label>
                <div className="col-sm-10 col-md-8">
                  <input
                    col-md-8
                    className="form-control"
                    type="text"
                    ref={register({ required: true })}
                    name="address"
                    placeholder=" address here"
                  />
                </div>
                {errors.text && (
                  <span className="text-danger">
                    This field must be required
                  </span>
                )}
              </div>

              <div className="form-group row">
                <label
                  htmlFor="occupation"
                  className="col-sm-2 col-md-4 col-form-label"
                >
                  {" "}
                  পেশা
                </label>
                <div className="col-sm-10 col-md-8">
                  <select class="form-control form-control-lg">
                    <option>select</option>
                    <option value="">Job</option>
                    <option value="">HouseWife</option>
                    <option value="">Business</option>
                    <option value="">Student</option>
                    <option value="">Retired</option>
                    <option value="">Other</option>
                  </select>
                </div>
                {errors.text && (
                  <span className="text-danger">
                    This field must be required
                  </span>
                )}
              </div>

              <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="form-group">
                  <button type="submit" className="support">
                    সাইন ইন করুন{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
