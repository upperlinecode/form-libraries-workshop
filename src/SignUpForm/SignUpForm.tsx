import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  ErrorMessage,
  PieForm,
  TextFieldInput,
  TextFieldLabel,
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

      <PieForm onSubmit={handleSubmit}>
        <TextFieldLabel>
          First Name
          <TextFieldInput
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.firstName}
          />
        </TextFieldLabel>
        {touched.firstName && errors.firstName && (
          <ErrorMessage>{errors.firstName}</ErrorMessage>
        )}

        <TextFieldLabel>
          Last Name
          <TextFieldInput
            name="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.lastName}
          />
        </TextFieldLabel>
        {touched.lastName && errors.lastName && (
          <ErrorMessage>{errors.lastName}</ErrorMessage>
        )}

        <TextFieldLabel>
          Email
          <TextFieldInput
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.email}
          />
        </TextFieldLabel>
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
      </PieForm>
    </Root>
  );
};

export default SignUpForm;
