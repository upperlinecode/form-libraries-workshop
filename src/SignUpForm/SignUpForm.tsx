import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  Label,
  RadioGroup,
  Root,
  Title,
} from "./SignUpForm.styles";

const validationSchema = Yup.object({
  firstName: Yup.string().min(3).max(10).required(),
  lastName: Yup.string().min(3).max(10),
  email: Yup.string().email().required(),
  pieSizePreference: Yup.string()
    .oneOf(["hand", "small", "medium", "large"])
    .required(),
});

const SignUpForm = () => {
  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        pieSizePreference: "",
      },
      onSubmit: (submittedValues) => {
        alert(JSON.stringify(submittedValues, null, 2));
      },
      validationSchema,
    });

  return (
    <Root className="SignUpForm">
      <Title>Weekly Pie Sign Up</Title>

      <Form onSubmit={handleSubmit}>
        <Label>
          First Name
          <Input
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.firstName}
          />
        </Label>
        {touched.firstName && errors.firstName && (
          <ErrorMessage>{errors.firstName}</ErrorMessage>
        )}

        <Label>
          Last Name
          <Input
            name="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.lastName}
          />
        </Label>
        {touched.lastName && errors.lastName && (
          <ErrorMessage>{errors.lastName}</ErrorMessage>
        )}

        <Label>
          Email
          <Input
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.email}
          />
        </Label>
        {touched.email && errors.email && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}

        <RadioGroup>
          <p>Pie Size Preference</p>
          <label>
            <input
              checked={values.pieSizePreference === "hand"}
              name="pieSizePreference"
              onBlur={handleBlur}
              onChange={handleChange}
              type="radio"
              value="hand"
            />
            Hand Pie
          </label>

          <label>
            <input
              checked={values.pieSizePreference === "small"}
              name="pieSizePreference"
              onBlur={handleBlur}
              onChange={handleChange}
              type="radio"
              value="small"
            />
            Small (6 inch diameter)
          </label>

          <label>
            <input
              checked={values.pieSizePreference === "medium"}
              name="pieSizePreference"
              onBlur={handleBlur}
              onChange={handleChange}
              type="radio"
              value="medium"
            />
            Medium (10 inch diameter)
          </label>

          <label>
            <input
              checked={values.pieSizePreference === "large"}
              name="pieSizePreference"
              onBlur={handleBlur}
              onChange={handleChange}
              type="radio"
              value="large"
            />
            Large (14 inch diameter)
          </label>
          {touched.pieSizePreference && errors.pieSizePreference && (
            <ErrorMessage>{errors.pieSizePreference}</ErrorMessage>
          )}
        </RadioGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </Root>

  );
};

export default SignUpForm;
