import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  spice: string;
}

const SignUpForm = () => {
  return (
    <div className="SignUpForm">
      <h1>Weekly Burrito Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          spice: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="spicePreference"> Spice Preference </label>
          <Field id="spicePreference" name="spicePreference" type="slider" />
          <div id="spicePreference">Spice Preference</div>
          <div role="group" aria-labelledby="spicePreference">
            <label>
              <Field type="radio" name="spice" value="No Spice" />
              No Spice 💚
            </label>
            <label>
              <Field type="radio" name="spice" value="Mild" />
              Mild 🌶
            </label>
            <label>
              <Field type="radio" name="spice" value="Medium" />
              Medium 🌶🌶
            </label>
            <label>
              <Field type="radio" name="spice" value="Spicy" />
              Spicy 🌶🌶🌶
            </label>
            <label>
              <Field type="radio" name="spice" value="Fire" />
              Fire 🥵
            </label>
            {/* <div>Picked: {values.spice}</div> */}
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
