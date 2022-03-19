import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserService from "../services/user.service";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";

const UpdateUser = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  let history = useHistory();

  return (
    <div className="main">
      <p class="sign" align="center">
        Update Users
        {id}
      </p>
      {loading && <h1>Messages: {errMessage}</h1>}

      <Formik
        initialValues={{ name: "", comment: "", login: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          UserService.updateUser(
            id,
            values.name,
            values.comment,
            values.login,
            values.password
          ).then(
            (response) => {
              history.push("/Pageadmin");
              setLoading(true);
              setErrMessage(response.data.message);
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setLoading(true);
              setErrMessage(resMessage);
            }
          );
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form1">
            <div align="center">
              <Field
                type="name"
                name="name"
                className="un "
                placeholder="name"
              />
              <ErrorMessage name="name" component="div" />
            </div>

            {/* comment */}
            <Field
              type="name"
              name="comment"
              className="un "
              placeholder="comment"
              align="center"
            />
            <ErrorMessage name="comment" component="div" />
            {/* login */}
            <Field
              type="name"
              name="login"
              className="un "
              placeholder="login"
              align="center"
            />
            <ErrorMessage name="login" component="div" />
            {/* password */}
            <Field
              type="password"
              name="password"
              className="pass"
              placeholder="password"
              align="center"
            />
            <ErrorMessage name="password" component="div" />
            <button className="submit" type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <p className="forgot" align="center">
              <Link to="/Pageadmin">
                <a>Back To Admin?</a>
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UpdateUser;
