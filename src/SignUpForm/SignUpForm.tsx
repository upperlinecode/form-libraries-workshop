import { useFormik } from "formik";

const SignUpForm = () => {
  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      pieSizePreference: "",
    },
    onSubmit: (submittedValues) => {
      alert(JSON.stringify(submittedValues, null, 2));
    },
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
