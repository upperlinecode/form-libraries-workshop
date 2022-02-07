import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { SignUpFormRoot } from "./SignUpForm.styles";
import { reduceEachLeadingCommentRange } from "typescript";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  size: string;
}

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        size: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values, errors, touched, handleSubmit, isSubmitting }) => (
        <SignUpFormRoot>
          <Form>
            <h1>Sign Up for Weekly 🥧</h1>
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
            <div id="pieSize">Pie Size Preference</div>
            <div role="group" aria-labelledby="pieSize">
              <label>
                <Field type="radio" name="size" value="handPie" />
                Hand Pie
              </label>
              <label>
                <Field type="radio" name="size" value="small" />
                Small (6 inch diameter)
              </label>
              <label>
                <Field type="radio" name="size" value="medium" />
                Medium (10 inch diameter)
              </label>
              <label>
                <Field type="radio" name="size" value="large" />
                Large (14 inch diameter)
              </label>
              {/* <div>Picked: {values.size}</div> */}
            </div>

            <button type="submit">Submit</button>
          </Form>
        </SignUpFormRoot>
      )}
    </Formik>
  );
};

export default SignUpForm;
