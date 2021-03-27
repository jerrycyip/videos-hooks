# Search for Videos App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
This project comprises a refactor of the existing 'videos' repository using functional components and hooks instead of class components and lifecycle methods.  Funtionally, the project comprises the same functionality, that is, a basic search bar that retrieves videos from [YouTube's Search:list API](https://developers.google.com/youtube/v3/docs/search/list) and displays a list of video results in a CSS Grid along with a video player for the selected video.  We leverage [Semantic UI's](https://semantic-ui.com/) free stylesheet for styling our app (stylesheet href link included in index.html) - this saves time and ensures the project's primary focus is practicing React JS concepts.

This project is one of the practice exercises for Stephen Grider's Udemy course, [Modern React with Redux](https://www.udemy.com/course/react-redux/).  The project helps practice using core React JS concepts including the following:  
1) Building Content with JSX
2) Communicating with Props
3) Structuring Apps with Class-Based Components
4) State in React Component
5) Understanding Lifecycle Methods
6) Handling User Input with Forms and Events
7) Making API Requests with React
8) Building Lists of Records
9) Using Ref's for DOM Access
...
12) Understanding Hooks in React 
13) Hooks in Practice (including customer hooks)

## Result - Demo
![Search Pics App](videos-demo.gif)


## Setting up the APIs
### Step 1: Sign-up for developer API keys
This project uses the [YouTube's Search:list API](https://developers.google.com/youtube/v3/docs/search/list).  To use YouTube's API, you can sign up for a free Google developer API key [here](https://console.developers.google.com/).  If this is your first time using Google's APIs, you'll first need to create a 'new project' after initial sign-up, afterwhich you can create associated credentials for use in the Videos App.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
