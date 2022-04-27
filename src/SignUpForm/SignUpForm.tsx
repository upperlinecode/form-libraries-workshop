// import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const { handleChange, handleSubmit, errors, values, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      pieSize: "",
    },
    onSubmit: (values) => {
      console.log(values.pieSize);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="SignUpForm">
      <h1>Weekly Pie Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          name="firstName"
          type="text"
          onChange={handleChange}
          value={values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          name="lastName"
          type="text"
          onChange={handleChange}
          value={values.lastName}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
        />
        <label>Pie Size Preference</label>
        <div role="group">
          <label>
            <input
              type="radio"
              name="pieSize"
              value="handPie"
              onChange={handleChange}
            />
            Hand Pie
          </label>
          <label>
            <input
              type="radio"
              name="pieSize"
              value="small"
              onChange={handleChange}
            />
            Small (6 inch diameter)
          </label>
          <label>
            <input
              type="radio"
              name="pieSize"
              value="medium"
              onChange={handleChange}
            />
            Medium (10 inch diameter)
          </label>
          <label>
            <input
              type="radio"
              name="pieSize"
              value="large"
              onChange={handleChange}
            />
            Large (14 inch diameter)
          </label>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
