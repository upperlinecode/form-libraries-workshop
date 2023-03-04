# Intro to Form Libraries

## Pie of the Week

![blueberry pie slice](https://dinnerthendessert.com/wp-content/uploads/2019/01/Blueberry-Pie-2.jpg)

In this lab, we'll be signing up for a fictional subscription service called Weekly pie. Every week, Weekly Pie will deliver you a surprise pie. When we sign users up, we'll collect their pie preferences, in addition to their basic contact information.

## Objectives

- Understand _why_ we use form libraries
- Implement form libraries to create a basic sign up form with fully functional state management, input validation, and error-handling.

## Why?

This lab is designed to get you interacting with form libraries. There are a wide variety of form libraries and ways to handle form behavior in general. Once you get used to the core functionality of a single library, however, the learning curve for other libraries will be less steep. For the purposes of this lab, we'll focus on two commonly used libraries at Giant Machines: [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup).

In previous experiences, you may have built forms from scratch. So, you may be wondering why we use libraries like Formik and Yup to handle form behavior for us. Simply put, many forms have very similar behaviors, and using libraries like Formik and Yup help save time and write more concise code for these predictable form behaviors, in addition to ensuring consistent handling of edge cases and error states. Or, as the library's repo description reads, "Build forms in React, without the tears 😭"

# Key Vocab

- `validation` - the process of checking input values prior to submitting to ensure correct data types, formats, etc.

## Getting Started

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.
2. Take some time to explore the app as it currently exists. Notice that we have created the `SignUpForm` component already - this is where you'll do the majority of your work for this lab. All you should see right now is some unstyled text that says "Weekly Pie Sign Up".

## Mockup

![form mockup](mockup.png)

## Guidance

0. **Open the `SignUpForm.styles.tsx` file and study it** - most of the styled components you'll need to build this form have already been created for you, so take note of what's here before writing styles of your own.

1. **Create the initial form structure with HTML elements** - Create an uncontrolled form with the fields `firstName`, `lastName`, `email`, and `pieSizePreference` matching the **mockup above** to see what that entails. No need to handle submit or handle changes. We'll use Formik to address all that in later steps.

   - If you wish to match the mockup without writing any CSS of your own, you'll need to nest your inputs _inside_ their corresponding label elements.
     - Remember that if the label's `htmlFor` property matches the input's `id`, clicking on the label will focus the input, which most users assume will happen.

```jsx
// Preferred syntax example:
<label htmlFor="input1">
  Your idea
  <input
    type="text"
    id="input1"
    name="idea"
    placeholder="what's your favorite idea?"
  />
</label>
```

- Brush up on [radio buttons](https://www.w3schools.com/tags/att_input_type_radio.asp) if you aren't confident with them.
  - Remember that in order for radio buttons to be single-select, they must have the same "name" property but different "value" properties.
  - Remember also that in order for the text of a radio button to also count as selecting the radio button, you must wrap it in a label with an `htmlFor` that matches that radio button's ID.

2. **Style with styled components** - If you don't like writing your own CSS, consider using the pre-made styled components to match the mockup more easily. Replace the following HTML elements with the corresponding styled components for maximum effect:

- Instead of `<form>`, use `PieForm`.
- Instead of `<label>`, use `TextFieldLabel` when the label is specifically for a text field.
- Instead of an `<input type="text">`, use `TextFieldInput` with `type="text"` as a prop. Remember, styled components accept as props all the same things that their corresponding html elements accept as attributes.
- Replace the existing `<h1>` with the `Title`.
- Wrap all four of your radio button inputs in a `RadioGroup`, which is just a styled div.

3. **Add Formik to handle your forms state management** - Note that you should be using the [useFormik hook](https://formik.org/docs/api/useFormik), not the `<Formik>` component. You'll know this is working when you can click the submit button and see an alert with your form data. Follow the below steps for a more granular explanation.

   - Set up your `formik` object with the initialization method shown in the docs above. It will need an `initialValues` property, which is an object with keys matching your input names, and an `onSubmit` property, which is a function.
   - Your `onSubmit` will eventually be refactored to access a back-end of some sort, likely in conjunction with Redux, but for now, just use the alert that is recommended in the documentation: `onSubmit: values => { alert(JSON.stringify(values, null, 2)); }`.
   - Add the `formik.handleSubmit` as the `onSubmit` of the entire form. NOTE: This is done in the opening tag of the `<form>` (or in this case `<PieForm>`) element / component, and not in the actual submit button itself.
   - Let's use Formik to begin to turn this into a [controlled form](https://reactjs.org/docs/forms.html#controlled-components) by adding the `formik.handleChange` to the `onChange` property to each input.
   - By now, you should be able to see the values from Formik when you interact with your form - assuming you named your Formik object `formik`, consider adding a `console.log(formik)` to see everything Formik is tracking for you out of the box.
   - We want this form to be controlled, so make sure to update the `value` property of each input, as demonstrated in the documentation.
     - The radio buttons will be different - you'll end up leaving the value hardcoded and adding a property like `checked={formik.pieSizePreference === "small"}` or some other logic to determine whether that specific radio button should be filled in or not.
   - Test the form and see if your alert runs as expected now that you have a controlled form.

4. **Form Validation** - Our form does not have any error states, so let's add form validation with [a Yup validation schema](https://formik.org/docs/guides/validation#validationschema). For now, you can use these validation rules:

   - first name is **required**, must be at least 2 characters, and have a max of 20 characters
   - last name must be longer at least 2 characters and have a max of 20 characters
   - email is a **required** valid email address
   - a size has been selected as one of the 4 choices: "hand", "small", "medium", or "large".

> You may want to reference the [yup reference](https://github.com/jquense/yup#table-of-contents) to see what validation methods are available, especially for the pie size option.

5. **Handle Submit** - Your handle submit will get the values stored in Formik, however now that we've added validations, test it out. Notice what happens if you try to submit the form with errors.

   - Add a `console.log(formik.errors)` to see live updates of how these errors are updated with each new input.
   - Use this to debug any issues with either your validation schema or your forms.

6. **Errors** - Use the errors from the Formik state (`formik.errors`) to render the corresponding error messages beneath your inputs. To easily match the mockup, render these errors in a separate HTML element beneath each corresponding input and label.

   - Use the pre-made styled component `ErrorMessage` if you want to match the mockup without writing a lot of your own CSS.
   - You'll want to use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) to make sure the error for each field only shows up if that field currently has an error.

7. It feels strange to have errors showing for fields you haven't yet touched. Rework your error messages to only show errors beneath a field if that field has been touched.
   - Add an `onBlur` using Formik's built in `formik.handleBlur` function.
     - Take a minute to learn more about [blur events](https://www.w3schools.com/jsref/event_onblur.asp#:~:text=Definition%20and%20Usage,user%20leaves%20a%20form%20field) if this concept is new to you.
   - Console.log `formik.touched` to see the blur handling in action.

## Extensions

Once you are done with the core exercises above, you are welcome to choose any of the below extensions:

### Mild:

- Update our validationSchema to have better error messaging per rule.
- Try adding additional complex form input types (e.g. a slider or a dropdown), and ensure that their state is still properly stored and manipulated.

### Medium:

- Add a checkbox section where the user can select some of their preferred pie fillings, and write a validation rule that restricts them to only 5 favorite fillings.
- Add two additional fields to the form - a "bid" field that lets the user say how much they would pay to join the pie-of-the-month club with their listed pie preferences, and an "allergies" field for them to list any dietary restrictions they might have.
  - Use Yup's `.when()` [conditional validation](https://github.com/jquense/yup#schemawhenkeys-string--string-builder-object--values-any-schema--schema-schema) to render an error if their selected pie is "medium" or "large" and their bid is under $20. Let them know that
  - Render an error if their allergy matches any of their preferred fillings, or if they're allergic to butter or flour, both of which are in our pie crusts and cannot be removed.

### Authentic:

- Try repeating the exercise with [React Hook Form](https://react-hook-form.com/) - another library commonly used in Giant Machines projects. The concepts are similar but the syntax is different.
