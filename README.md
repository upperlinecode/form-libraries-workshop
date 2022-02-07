 # Intro to Form Libraries

## Signing Up for 

## Objectives

- Understand *why* we use form libraries
- Implement form libraries to create a basic sign up form with fully functional state management, input validation, and error-handling.

## Why?

This lab is designed to get you interacting with form libraries. There are a wide variety of form libraries and ways to handle form behavior in general. Once you get used to the core functionality of a single library, however, the learning curve for other libraries will be less steep. For the purposes of this lab, we'll focus on two of the most commonly used libraries at Giant Machines: [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup). 

In previous experiences, you may have built forms from scratch. So, you may be wondering why we use libraries like Formik and Yup to handle form behavior for us. Simply put, many forms have very similar behaviors, and using libraries like Formik and Yup help save time and write more concise code for these predictable form behaviors, in addition to ensuring consistent handling of edge cases and error states. Or, as the library's repo description reads, "Build forms in React, without the tears 😭"

# Key Vocab

- `validation` - the process of checking input values prior to submitting to ensure correct data types, formats, etc.
- ``

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE.

## Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.
1. Head to the [Giphy Developer Site](https://developers.giphy.com) and sign up for an account. Then head to the [dashboard](https://developers.giphy.com/dashboard/) and press the **+** icon in the **Your Apps** section to generate a new API key. You'll know you're ready to start the lab when your dashboard looks like:

   ![api generated screenshot](api_key_generated.jpg)

1. Take some time to explore the app as it currently exists. Notice that it currently renders 5 gifs, which are coming from `src/data/sample_data.ts`. For this lab, we'll work to move our data fetching and storage from the data file to a redux store.

## Guidance:

1. **Create a basic Formik form** - 
1. **Add in styling using Styled Components** - Check out this article [Styled Components + React Formik](https://medium.com/flyparakeet/react-formik-styled-components-add78b37971f) for a good example of one way to use Formik with styled components. Refactor your form to match the mockup. By the end of this refactor, you should have **FILL IN FIELDS TO CREATE** on your form matched to the mock-up, using exclusively styled components. A quick visual check of your code should show no raw HTML elements - all should be named styled components. 
1. **Add Fields & Style** - Create the remaining fields from the mock-up. 
1. **Form Validation** - Check to ensure form validation matches the error states in the mockup. This should be handled by Yup. 
1. **Handle Submit** -  Ensure proper submit behavior. For now, since we're not submitting to an actual API, you should simply check to ensure that the state of the SignUpForm component has been properly stored using your React dev tools. 

## Extensions
Once you are done with the core exercises above, you are welcome to choose any of the below extensions:
1. Try repeating the exercise with React Form, since you'll see both Formik and React Form used on different projects
1. 
