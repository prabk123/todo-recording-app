Here is a deployed [DEMO](http://todo.prabodhkakodkar.com) version of this application. This is deployed on Heroku using a free plan, so it may take a few moments to load as the dynos spin up.

# Installation Instructions

Navigate to [https://github.com/prabk123/todo-recording-app](https://github.com/prabk123/todo-recording-app) to view the GitHub repository. You can clone the project locally by running the following:

```zsh
$ git clone git@github.com:prabk123/todo-recording-app.git
```

You can then spin up the development bundle of the application using the following commands:

```zsh
$ cd todo-recording-app
$ npm install
$ npm run dev
```

Navigate to the app in the browser at [http://localhost:3000](http://localhost:3000) and enjoy!

---

If you'd like to run the production build of the application locally then you can do so as follows. Firstly make sure that you've installed all dependencies using `npm install`. Then run the following commands to build and spin up the server:

```zsh
$ npm run build
$ npm start
```

Navigate to the app in the browser at [http://localhost:3000](http://localhost:3000) and enjoy!

# Testing

The application has been unit tested using Jest and Enzyme. The following commands will let you run the tests.

Run Jest and execute all tests:

```zsh
$ npm run test
```

Run all the tests and keep on watch mode, so that when any changes are made to the test cases, it will execute those test cases again:

```zsh
$ npm run test:watch
```

# Technologies

This is a single page application (SPA), built with React.js. The state management for this app is governed using Redux and the styling has been coded from scratch using CSS. No UI frameworks have been used as per the requirements. The application bundle has been optimised using Webpack for both development and production environments.

# Webpack Configuration

## Development Bundle

The development bundle has been optimised for a quick spin up time, hot reloading and strong source mapping so that developers can easily debug errors in the browser. I'm using the [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin) to display error messages in the browser screen (similar to create-react-app) and the webpack dev server to serve the application.

## Production Bundle

#### File Minification

All files have been minified to reduce bundle size and increase load speed. The entry index.html file has been minified using [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) which has been configured to remove all comments, white space and redundant attributes from the HTML file.

The javascript files have been minified using [TerserWebpackPlugin](https://webpack.js.org/plugins/terser-webpack-plugin/) which is webpack's standard js minifier.

All CSS files have minimised using [OptimizeCssAssetsPlugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin) and then extracted into their own bundle using [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/). This allows all CSS to be loaded at the top of the HTML file before the javascript is loaded, preventing style flickering.

#### Bundle Splitting

The javascript has been split into two bundles, a "vendors" bundle that contains all the dependancies and a "main" bundle that contains the main application files. A content hash has been added to the filenames so that they can be cached to improve subsequent load times. By splitting the bundles this way, changes can be made to the main js file while keeping the vendors file cached so that the browser will not have to request all the code again.

#### Compression

Finally, all files are compressed during the build process to gzip format for faster delivery times. The compression resulted in a final bundle size that is 68.5% less than the original bundle.

# Requirements

### List, create, update and remove todos.

The state of the "to dos" is managed by Redux. I created a modal to add and update "to dos". On submitting the form within the modal, either an `addToDo()` or `updateToDo()` action creator is called in Redux causing the state to update.

For removing todos I added a delete button in the top right hand corder of each listed "to do". This button appears when the "to do" in question is hovered over. Once the button is clicked a `removeToDo()` action creator will be called within Redux, updating the state to remove the specific "to do".

### Start, stop and reset recording.

I've added buttons in the header bar to start, stop and reset the recording. These buttons trigger action creators in Redux which then set the state to listen for user interactions. The "Record" button fires a `startRecording()` action creator, which tells the reducer to record all interactions moving forward. The same button can then be clicked to stop the recording. Once a recording has been made, another cannot be made until the first is reset. This can be done by clicking the reset button.

### Play recording.

Once a recording has been made it can be played using the play button. This fires an asynchronous async `playRecording()` method on the ToDos component which starts animating the UI. It plays back the users interactions in the correct order using multiple `setState()` calls, spaced out by an asynchronous `await wait(ms)` function that waits for a predetermined number of milliseconds before the rest of the code is run. This function results in the UI being animated to show the user taking each action, highlighted with a corresponding colour, and waiting for 1 second between each action.

# Bonuses

## How I'd make the application better.

#### Code Splitting

As the application grows, something that is well worth doing is splitting the code into separate bundles by routes and lazy loading only the parts of the application that are being used. For a larger application this should significantly speed up load times and make the user experience far better.

#### Feature Upgrades

The application could have multiple folder to categorise "to dos". For example a folder for work, home and exercise. A good addition may also be add functionality to save multiple recordings and play any recording from a selection.

## Button animations & page transitions

Buttons expand and button labels appear on hover. This smooth effect was achieved with CSS transitions. A nice fade transition was also added between page routes. This was implemented using [react transition group](https://reactcommunity.org/react-transition-group/).
