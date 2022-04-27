const SignUpForm = () => {
  return (
    <div className="SignUpForm">
      <h1>Weekly Pie Sign Up</h1>

      <form>
        <label>
          First Name
          <input type="text" name="firstName" />
        </label>

        <label>
          Last Name
          <input type="text" name="lastName" />
        </label>

        <label>
          Email
          <input type="text" name="email" />
        </label>

        <p>Pie Size Preference</p>
        <label>
          <input type="radio" name="pieSizePreference" />
          Hand Pie
        </label>

        <label>
          <input type="radio" name="pieSizePreference" />
          Small (6 inch diameter)
        </label>

        <label>
          <input type="radio" name="pieSizePreference" />
          Medium (10 inch diameter)
        </label>

        <label>
          <input type="radio" name="pieSizePreference" />
          Large (14 inch diameter)
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
