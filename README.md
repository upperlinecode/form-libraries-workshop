 # Intro to Form Libraries

## Pie of the Week

![pumpkin pie slice](https://dinnerthendessert.com/wp-content/uploads/2019/01/Blueberry-Pie-2.jpg)

In this lab, we'll be signing up for a fictional subscription service called Weekly pie. Every week, Weekly Pie will deliver you a surprise pie. When we sign users up, we'll collect their pie preferences, in addition to their basic contact information. 

## Objectives

- Understand *why* we use form libraries
- Implement form libraries to create a basic sign up form with fully functional state management, input validation, and error-handling.

## Why?

This lab is designed to get you interacting with form libraries. There are a wide variety of form libraries and ways to handle form behavior in general. Once you get used to the core functionality of a single library, however, the learning curve for other libraries will be less steep. For the purposes of this lab, we'll focus on two of the most commonly used libraries at Giant Machines: [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup). 

In previous experiences, you may have built forms from scratch. So, you may be wondering why we use libraries like Formik and Yup to handle form behavior for us. Simply put, many forms have very similar behaviors, and using libraries like Formik and Yup help save time and write more concise code for these predictable form behaviors, in addition to ensuring consistent handling of edge cases and error states. Or, as the library's repo description reads, "Build forms in React, without the tears 😭"

# Key Vocab

- `validation` - the process of checking input values prior to submitting to ensure correct data types, formats, etc.

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE.

## Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.

1. Take some time to explore the app as it currently exists. Notice that we have created the `SignUpForm` component already - this is where you'll do the majority of your work for this lab.

## Guidance:

1. **Create a basic Formik form** - get a basic form up and running without styling. We recommend using [this example](https://formik.org/docs/examples/typescript) to get started.
1. **Add in styling using Styled Components** - Check out this article [Styled Components + React Formik](https://medium.com/flyparakeet/react-formik-styled-components-add78b37971f) for a good example of one way to use Formik with styled components. Refactor your form to match the mockup. By the end of this refactor, you should have **FILL IN FIELDS TO CREATE** on your form matched to the mock-up, using exclusively styled components. A quick visual check of your code should show no raw HTML elements - all should be named styled components. 
1. **Add Fields & Style** - Create the remaining fields from the mock-up. 
1. **Form Validation** - Check to ensure form validation matches the error states in the mockup. This should be handled by Yup. 
1. **Handle Submit** -  Ensure proper submit behavior. For now, since we're not submitting to an actual API, you should simply check to ensure that the state of the SignUpForm component has been properly stored using your React dev tools. 

## Extensions
Once you are done with the core exercises above, you are welcome to choose any of the below extensions:
1. Try repeating the exercise with [React Hook Form](https://react-hook-form.com/), since you'll see both Formik and React Hook Form used on different projects
1. Try adding additional complex form input types (like a slider or single select with styled buttons), and ensure that their state is still properly stored and manipulated (using the React dev tools).  
