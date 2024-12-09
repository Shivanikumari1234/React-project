import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    rememberMe: Yup.boolean(),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        if (values.rememberMe) {
          localStorage.setItem("email", values.email);
        }
        alert("Login Successful!");
        resetForm();
      }}
    >
      {() => (
        <Form aria-labelledby="login-form">
          <h2 id="login-form">Login</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label>
              <Field type="checkbox" name="rememberMe" />
              Remember Me
            </label>
          </div>
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
