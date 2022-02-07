import * as React from "react";
import * as ReactDOM from "react-dom";
import { Formik, Form, FormikHelpers } from "formik";
import {
  SignUpFormRoot,
  Label,
  RadioGroup,
  TextField,
  RadioField,
  Button,
} from "./SignUpForm.styles";
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
            <Label htmlFor="firstName">First Name</Label>
            <TextField id="firstName" name="firstName" placeholder="John" />
            <Label htmlFor="lastName">Last Name</Label>
            <TextField id="lastName" name="lastName" placeholder="Doe" />

            <Label htmlFor="email">Email</Label>
            <TextField
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <Label id="pieSize">Pie Size Preference</Label>
            <RadioGroup role="group" aria-Labelledby="pieSize">
              <Label>
                <RadioField type="radio" name="size" value="handPie" />
                Hand Pie
              </Label>
              <Label>
                <RadioField type="radio" name="size" value="small" />
                Small (6 inch diameter)
              </Label>
              <Label>
                <RadioField type="radio" name="size" value="medium" />
                Medium (10 inch diameter)
              </Label>
              <Label>
                <RadioField type="radio" name="size" value="large" />
                Large (14 inch diameter)
              </Label>
            </RadioGroup>

            <Button type="submit">Submit</Button>
          </Form>
        </SignUpFormRoot>
      )}
    </Formik>
  );
};

export default SignUpForm;
