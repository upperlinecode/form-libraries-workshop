 # Intro to Form Libraries

## Signing Up for 

## Objectives

- Understand *why* we use form libraries
- Implement form libraries to create a basic sign up form with fully functional state management, input validation, and error-handling.

## Why?

This lab is designed to get you interacting with form libraries. There are a wide variety of form libraries and ways to handle form behavior in general. Once you get used to the core functionality of a single library, however, the learning curve for other libraries will be less steep. For the purposes of this lab, we'll focus on two of the most commonly used libraries at Giant Machines: [Formik](https://formik.org/) and [Yup](https://www.npmjs.com/package/yup). 

In previous experiences, you may have built forms from scratch. So, you may be wondering why we use libraries like Formik and Yup to handle form behavior for us. Simply put, many forms have very similar behaviors, and using libraries like Formik and Yup help save time and write more concise code for these predictable form behaviors, in addition to ensuring consistent handling of edge cases and error states. 

# Key Vocab

- `store` - global readonly state. Due to its readonly state, reducers are used to mutate the state.
- `reducers` - pure functions whose responsibility is to process actions and manipulate the store's state.
- `actions` - following the Flux Standard Action (FSA) pattern, actions are objects that communicate to redux on what is happening. Reducers will interpret these action objects and decide what should be done.
- `selectors` - getter functions to retrieve specific data from redux. Can also be used to increase performance of constantly getting information from the store by memoization.s

## Directions

This lab has been tested in VSCode. You're welcome to run it elsewhere if you like, but the instructions are written with the assumption that you're operating on your code in the VSCode IDE.

## Getting Started:

1. Clone this repository down to your local environment and navigate to the root directory. Run `npm install` and then `npm start` to ensure you can preview your app.
1. Head to the [Giphy Developer Site](https://developers.giphy.com) and sign up for an account. Then head to the [dashboard](https://developers.giphy.com/dashboard/) and press the **+** icon in the **Your Apps** section to generate a new API key. You'll know you're ready to start the lab when your dashboard looks like:

   ![api generated screenshot](api_key_generated.jpg)

1. Take some time to explore the app as it currently exists. Notice that it currently renders 5 gifs, which are coming from `src/data/sample_data.ts`. For this lab, we'll work to move our data fetching and storage from the data file to a redux store.

## Guidance:

1. **Add Sample Data to Redux Store** - to start this lab, we'll be working with the sample data file. The goal of this step is to take the data stored in the `src/data/sample_data.ts` file and store it in our redux store. Notice that in `App.tsx`, we have already added in the initial Redux store instantiation with the `configureStore` function and then wrapped our `App` component in the `Provider` component from `react-redux`

   ![redux store setup](redux_setup.png)

    You'll need to work in the `actions.ts`, `reducer.ts`, and `types.ts` files to add the data from data_store.ts to the redux store. You'll know you were succesful when you can see the initial state in the `State` tab of the Redux dev tools in your browser.

1. **Incorporate stored data into the app** - Now that you have the sample data in your redux store, we'll need to use the data from teh redux store. In the `App.tsx` file, use the `useSelector` hook to pull in the data from your redux store. Visually, nothing in your app should change. Check to make sure that you're using the redux store exclusively by removing all direct references to the sample data file from your `App.tsx` file.

1. **Fetch Data from API and add to Redux Store** - The final step is to substitute the sample data for actual data from the Giphy API. Fetching data from an API requires us to manage asynchronous workflows with Redux for the first time in our work so far. To do this, you'll need to use `redux-thunk`. For more information about how Thunks work, we recommend checking out the [Redux documentation on async logic](https://redux.js.org/tutorials/essentials/part-5-async-logic). For this exercise, you'll need to use the API key you generated, and use the "trending" API endpoint.

## Extensions
Once you are done with the core exercises above, you are welcome to choose any of the below extensions:
1. Improve the page with custom CSS
2. The Giphy API has a number of different endpoints. We're using the "trending" endpoint above, but see if you can give the user the option to choose which endpoint you fetch from, and update the Redux store accordingly. 
3. Add a search bar and allow the user to search for gifs around a theme

## Final Thoughts

Redux is designed to manage large, complex apps, and is itself quite complex. It will take time to get used to using it. Redux uses quite a bit of boilerplate logic, which means that the general structure and patterns will remain familiar application-to-application. - it's okay if you don't understand everything right away, and are pattern-matching for a little while!