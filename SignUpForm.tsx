import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  const handlePasswordChange = (password: string) => {
    const strength = 
      password.length > 8
        ? "Strong"
        : password.length > 5
        ? "Medium"
        : "Weak";
    setPasswordStrength(strength);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Sign Up Successful!");
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form aria-labelledby="sign-up-form">
          <h2 id="sign-up-form">Sign Up</h2>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                handlePasswordChange(e.target.value);
              }}
            />
            <ErrorMessage name="password" component="div" />
            <div>Password Strength: {passwordStrength}</div>
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
