// Render Prop
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AuthService from "../services/auth.service";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  let history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          AuthService.login(values.login, values.password).then(
            () => {
              history.push("/Pageadmin");
              setLoading(true);

              setErrMessage("registered");
              //   window.location.reload();
              setSubmitting(true);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setLoading(true);
              setErrMessage("user not found register first");
            }
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form className="sign-in-form">
            <h2 className="title">Sign in</h2>
            {loading && <h1>Messages: {errMessage}</h1>}

            <div className="input-field">
              <i className="fas fa-user"></i>
              <Field type="login" name="login" placeholder="login" />
              <ErrorMessage name="login" component="div" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <Field type="password" name="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btn solid">
              Submit
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
