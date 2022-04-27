import { useFormik } from "formik";
import * as Yup from "yup";

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
    <div className="SignUpForm">
      <h1>Weekly Pie Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            name="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.firstName}
          />
        </label>
        {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}

        <label>
          Last Name
          <input
            name="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.lastName}
          />
        </label>
        {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}

        <label>
          Email
          <input
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.email}
          />
        </label>
        {touched.email && errors.email && <p>{errors.email}</p>}

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
          <p>{errors.pieSizePreference}</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
