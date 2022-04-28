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

1. **Create the initial form structure with HTML elements** - Create an uncontrolled form with the fields `firstName`, `lastName`, `email`, and `pieSizePreference`. No need to handle submit or handling change, we'll let Formik handle all the state and actions that flow through our form in steps 2-5.
   - If you wish to match the mockup, you'll need to nest your inputs _inside_ their corresponding label elements.
   - Pre-made styled components you may wish to use if you want to match the mockup: `PieForm`, `TextFieldLabel`, `TextFieldInput`, `Root`, `Title`, `RadioGroup`
2. **Add Formik to handle your forms state management** - Note that you should be using the [useFormik hook](https://formik.org/docs/api/useFormik), not the `<Formik>` component.
   - Let Formik handle the storing of values, errors, and touched states - to do this, you'll need both `onChange` and `onBlur` event handlers.
   - You also want this form to be controlled, so make sure to update the value property, as demonstrated in the documentation.
   - By the end of this you should be able to see the values and touches states from Formik when you interact with your form.
   - For submitting, console.log or alert the values from your form.
   - **Note:** for this exercise lets focus on useFormik and avoid using the prebuilt form element components from Formik.
3. **Form Validation** - Our form does not have any error states, so lets add [form validation with Yup](https://formik.org/docs/guides/validation). For now, you can use these validation rules:

   - first name is required, must be longer than 2 characters, and have a max of 10 characters
   - last name must be longer than 2 characters and have a max of 10 characters
   - email is a required valid email address (hint: take a close look at the Yup docs)
   - a size has been selected as one of the 4 choices: "hand", "small", "medium", or "large".

> You may want to reference the [yup reference](https://github.com/jquense/yup#table-of-contents) to see what validation methods are available.

4. **Handle Submit** - Your handle submit will get the values stored in Formik, however now that we've added validations take a look at the lifecycle of Formik and see if you can submit the form with errors.
5. **Errors** - Use the errors from the Formik state to render the error messages beneath your inputs. To match the mockup, render these errors in a separate HTML element beneath each corresponding input.
   - Pre-made styled components you may wish to use if you want to match the mockup: `PieErrorMessage`

## Extensions

Once you are done with the core exercises above, you are welcome to choose any of the below extensions:

1. Add a button that allows you to add multiple people's first name, last name, email, and pie size. This will teach you how Formik handles arrays of form data.
2. Update our validationSchema to have better validation messaging per rule.
3. Add the validation rule so that first name and last name cannot be the same thing. This will teach you how you reference other form values for you validations.
4. Try adding additional complex form input types (like a slider or single select with styled buttons), and ensure that their state is still properly stored and manipulated (using the React dev tools).
5. Try repeating the exercise with [React Hook Form](https://react-hook-form.com/), since you'll see both Formik and React Hook Form. This is just another library that handles form state and have a lot of similarities in their core concepts.
