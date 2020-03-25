import React from "react";
import Container from "Shared/Container";
import Title from "Shared/Title";
import "./MoreInfo.css";

const MoreInfo = () => {
  return (
    <div className="MoreInfo-root">
      <Title level={4}>Installation Instructions</Title>
      <p>
        Navigate to{" "}
        <a
          href="https://github.com/prabk123/todo-recording-app"
          target="_blank"
        >
          https://github.com/prabk123/todo-recording-app
        </a>{" "}
        to view the github repository. You can clone the project locally by
        running the following:
      </p>
      <pre>
        <code>$ git clone git@github.com:prabk123/todo-recording-app.git</code>
      </pre>
      <p>
        You can then spin up the development bundle of the application using the
        following commands:
      </p>
      <pre>
        <code>
          $ cd todo-recording-app
          <br />$ npm install
          <br />$ npm run dev
        </code>
      </pre>
      <p>
        Naviagte to the app in the browser at{" "}
        <a href="http://localhost:3000" target="_blank">
          http://localhost:3000
        </a>{" "}
        and enjoy!
      </p>
      <hr />
      <p>
        If you'd like to run the production build of the application locally
        then you can do so as follows. Firstly make sure that you've installed
        all dependencies using{" "}
        <code className="MoreInfo-code">npm install</code>. Then run the
        following commands to build and spin up the server:
      </p>
      <pre>
        <code>
          $ npm run build
          <br />$ npm start
        </code>
      </pre>

      <Title level={4}>Testing</Title>
      <p>
        The application has been unit tested using Jest and Enzyme. The
        following commands will let you run the tests.
      </p>
      <p>Run Jest and execute all tests:</p>
      <pre>
        <code>$ npm run test</code>
      </pre>
      <p>
        Run all the tests and keep on watch mode, so that when any changes are
        made to the test cases, it will execute those test cases again:
      </p>
      <pre>
        <code>$ npm run test:watch</code>
      </pre>

      <Title level={4}>Technologies</Title>
      <p>
        This is a single page application (SPA), built with React.js. The state
        management for this app is governed using Redux and the styling has been
        coded from scratch using CSS. No UI frameworks have been used as per the
        requirements. The application bundle has been optimised using Webpack
        for both development and production environments.
      </p>

      <Title level={4}>Webpack Configuration</Title>
      <Title level={5}>Development Bundle</Title>
      <p>
        The development bundle has been optimised for a quick spin up time, hot
        reloading and strong source mapping so that developers can easily debug
        errors in the browser. I'm using the Error Overlay Webpack Plugin to
        display error messages in the browser screen (similar to
        create-react-app) and the webpack dev server to serve the application.
      </p>

      <Title level={5}>Production Bundle</Title>
      <Title level={6}>File Minification</Title>
      <p>
        All files have been minified to reduce bundle size and increase load
        spped. The entry index.html file has been minified using
        HtmlWebpackPlugin which has been configured to remove all comments,
        white space and redundant attributes from the HTML file.
      </p>
      <p>
        The javascript files have been minified using TerserPlugin which is
        webpacks standard js minifier.
      </p>
      <p>
        All CSS files have minimised using OptimizeCssAssetsPlugin and then
        extracted into their own bundle using MiniCssExtractPlugin. This allows
        all CSS to be loaded at the top of the HTML file before the javascript
        is loaded, preventing style flickering.
      </p>

      <Title level={6}>Bundle Splitting</Title>
      <p>
        The javascript has been split into two bundles, a "vendors" bundle that
        contains all the dependancies and a "main" bundle and contains the main
        application files. A content hash has been added to the filenames so
        that they can be cached to improve subsequent load times. By splitting
        the bundles this way, changes can be made to the main js file while
        keeping the vendors file cached so that the browser will not have to
        request all the code again.
      </p>

      <Title level={6}>Compression</Title>
      <p>
        Finally, all files are compressed during the build process to gzip
        format for faster delivery times. The compression resulted in a final
        bundle size that is 68.5% less than the original bundle.
      </p>

      <Title level={4}>Requirements</Title>
      <Title level={5}>List, create, update and remove todos.</Title>
      <p>
        The state of the "to dos" is managed by Redux. I created a modal to add
        and update "to dos". On submiting the form within the modal, either an{" "}
        <code className="MoreInfo-code">addToDo()</code> or{" "}
        <code className="MoreInfo-code">updateToDo()</code> action creator is
        called in Redux causing the state to update.
      </p>
      <p>
        For removing todos I added a delete button in the top right hand corder
        of each listed "to do". This button appears when the "to do" in question
        is hovered over. Once the button is clicked a{" "}
        <code className="MoreInfo-code">removeToDo()</code> action creator will
        be called within Redux, updating the state to remove the specific to do.
      </p>

      <Title level={5}>Start, stop and reset recording.</Title>
      <p>
        I've added buttons in the header bar to start, stop and reset the
        recording. These buttons trigger action creators in Redux which then set
        the state to listen for user interactions. The "Record" button fires a{" "}
        <code className="MoreInfo-code">startRecording()</code> action creator,
        which tells the reducer to record all interactions moving forward. The
        same button can then be clicked to stop the recording. Once a recording
        has been made, another cannot be made until the first is reset. This can
        be done by clicking the reset button.
      </p>

      <Title level={5}>Play recording.</Title>
      <p>
        Once a recording has been made it can be played using the play button.
        This fires an asynchronous{" "}
        <code className="MoreInfo-code">async playRecording()</code> method on
        the ToDos component which starts animating the UI. It plays back the
        users interactions in the correct order using multiple{" "}
        <code className="MoreInfo-code">setState()</code> calls, spaced out by
        an asynchronous <code className="MoreInfo-code">await wait(ms)</code>{" "}
        fuction that waits for a predetermined number of milliseconds before the
        reset of the code is run. This function results in the UI being animated
        to show the activity of the user, marking each action with a
        corresponding colour and waiting for 1 second between each action.
      </p>

      <Title level={4}>Bonuses</Title>
      <Title level={5}>How I'd make the application better.</Title>
      <Title level={6}>Code Splitting</Title>
      <p>
        As the application grows, something that is well worth doing is
        splitting the code into seperate bundles by routes and lazy loading only
        the parts of the application that are being used. For a larger
        application this should significantly speed up load times and make the
        user experience far better.
      </p>

      <Title level={6}>Feature Upgrades</Title>
      <p>
        The application could have multiple folder to categorise "to dos". For
        example a folder for work, home and exercise. A good addition may also
        be add functionality to save multiple recodings and play any recording
        from a selection.
      </p>

      <Title level={5}>Button animations &amp; page transitions</Title>
      <p>
        Buttons expand and button labels appear on hover. This smooth effect was
        achieved with CSS transitions. A nice fade transition was also added
        between page routes. This was implemented using react transition groups.
      </p>
    </div>
  );
};

export default MoreInfo;
