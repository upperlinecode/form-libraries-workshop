# Intro to Form Libraries

## Pie of the Week

![pumpkin pie slice](https://dinnerthendessert.com/wp-content/uploads/2019/01/Blueberry-Pie-2.jpg)

In this lab, we'll be signing up for a fictional subscription service called Weekly pie. Every week, Weekly Pie will deliver you a surprise pie. When we sign users up, we'll collect their pie preferences, in addition to their basic contact information.

## Objectives

- Understand _why_ we use form libraries
- Implement form libraries to create a basic sign up form with fully functional state management, input validation, and error-handling.

## Why?

This lab is designed to get you interacting with form libraries. There are a wide variety of form libraries and ways to handle form behavior in general. Once you get used to the core functionality of a single library, however, the learning curve for other libraries will be less steep. For the purposes of this lab, we'll focus on two of the most commonly used libraries at Giant Machines: [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup).

In previous experiences, you may have built forms from scratch. So, you may be wondering why we use libraries like Formik and Yup to handle form behavior for us. Simply put, many forms have very similar behaviors, and using libraries like Formik and Yup help save time and write more concise code for these predictable form behaviors, in addition to ensuring consistent handling of edge cases and error states. Or, as the library's repo description reads, "Build forms in React, without the tears 😭"

# Key Vocab

- `validation` - the process of checking input values prior to submitting to ensure correct data types, formats, etc.

## Getting Started

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.
2. Take some time to explore the app as it currently exists. Notice that we have created the `SignUpForm` component already - this is where you'll do the majority of your work for this lab. All you should see right now is some unstyled text that says "Weekly Pie Sign Up".

## Mock Up

![form mockup](mockup.png)

## Guidance

1. **Create the initial form structure with HTML elements** - Create an uncontrolled form with the fields `firstName`, `lastName`, `email`, and `pieSizePreference` - reference the mockup above to see what that entails. No need to handle submit or handling change, we'll let Formik handle all the state and actions that flow through our form in steps 2-5.

   - If you wish to match the mockup, you'll need to nest your inputs _inside_ their corresponding label elements.
     - Remember that if the label's `htmlFor` property matches the input's `id`, clicking on the label will focus the input, which most users assume will happen.
   - You'll be using inputs of type text, email, and radio - brush up on [radio buttons](https://www.w3schools.com/tags/att_input_type_radio.asp) if you aren't confident with them.
   - If you don't like writing your own CSS, consider using the pre-made styled components to match the mockup more easily. Replace the following HTML elements with the corresponding stlyled components for maximum effect:
     - Instead of `<form>`, use `PieForm`.
     - Instead of `<label>`, use `TextFieldLabel` when the label is specifically for a text field.
     - Instead of an `<input type="text">`, use `TextFieldInput` with `type="text"` as a prop. Remember, styled components accept as props all the same things that their corresponding html elements accept as attributes.
     - Replace the existing `<h1>` with the `Title`.
     - Wrap all four of your radio button inputs in a `RadioGroup`, which is just a styled div.

2. **Add Formik to handle your forms state management** - Note that you should be using the [useFormik hook](https://formik.org/docs/api/useFormik), not the `<Formik>` component.

   - Set up your `formik` object with the initialization method shown in the docs above. It will need an `initialValues` property, which is an object with keys matching your input names, and an `onSubmit` property, which is a function.
   - Your `onSubmit` will eventually be refactored to access a back-end of some sort, likely in conjunction with Redux, but for now, just use the alert that is recommended in the documentation: `onSubmit: values => { alert(JSON.stringify(values, null, 2)); }`.
   - Add the `formik.handleSubmit` as the `onSubmit` of the entire form. NOTE: This is done in the opening tag of the `<form>` (or in this case `<PieForm>`) element / component, and not in the actual submit button itself.
   - Let Formik handle the storing of values, errors, and touched states - to do this, you'll need both `onChange` and `onBlur` event handlers. The documentation shows `onChange` but doesn't show `onBlur`, so be sure to include both for every input.
   - By now, you should be able to see the values and touched states from Formik when you interact with your form - assuming you named your Formik object `formik`, then you can access this information with `formik.values` and `formik.touched`. Consider console.logging both of these things out to see their contents.
   - We want this form to be controlled, so make sure to update the `value` property, as demonstrated in the documentation.
   - Test the form and see if your alert fires.

3. **Form Validation** - Our form does not have any error states, so let's add form validation with [a Yup validation schema](https://formik.org/docs/guides/validation#validationschema). For now, you can use these validation rules:

   - first name is **required**, must be at least 2 characters, and have a max of 20 characters
   - last name must be longer at least 2 characters and have a max of 20 characters
   - email is a **required** valid email address
   - a size has been selected as one of the 4 choices: "hand", "small", "medium", or "large".

> You may want to reference the [yup reference](https://github.com/jquense/yup#table-of-contents) to see what validation methods are available, especially for the pie size option.

4. **Handle Submit** - Your handle submit will get the values stored in Formik, however now that we've added validations, test it out. Notice what happens if you try to submit the form with errors.

5. **Errors** - Use the errors from the Formik state (`formik.errors`) to render the corresponding error messages beneath your inputs. To easily match the mockup, render these errors in a separate HTML element beneath each corresponding input and label.
   - Use the pre-made styled component `ErrorMessage` if you want to match the mockup without writing a lot of your own CSS.
   - You'll want to use [conditional rendering](https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator) to make sure the error for each field only shows up if that field currently has an error.
   - It feels strange to have errors showing for fields you haven't yet touched. Rework your error messages to only show errors beneath a field if that field has been touched.

## Extensions

Once you are done with the core exercises above, you are welcome to choose any of the below extensions:

1. Add a button that allows you to add multiple people's first name, last name, email, and pie size. This will teach you how Formik handles arrays of form data.
2. Update our validationSchema to have better validation messaging per rule.
3. Add the validation rule so that first name and last name cannot be the same thing. This will help you see how to reference other form values in your validations.
4. Try adding additional complex form input types (like a slider or single select with styled buttons), and ensure that their state is still properly stored and manipulated.
5. Try repeating the exercise with [React Hook Form](https://react-hook-form.com/), since you'll see both Formik and React Hook Form. This is just another library that handles form state and have a lot of similarities in their core concepts.
