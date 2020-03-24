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
        all dependacies using <code className="MoreInfo-code">npm install</code>
        . Then run the following commands to build and spin up the server:
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
      <p>
        Generate a coverage report based on all the tests executed. A detailed
        coverage report will be exported to the todo-recording-app/coverage
        folder:
      </p>
      <pre>
        <code>$ npm run test:coverage</code>
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
      <p>
        The production bundle focusses on minifying files, light weight source
        maps and optimising assets for fast delivery and load times. I've used
        CompressionWebpackPlugin to compress files into a gzip format for faster
        delivery. CSS files are extracted and minified using
        MiniCssExtractPlugin so that they are loaded before the JavaScript. All
        bundled files are content hashed so that they can be cached for faster
        load times on subsequent loads and all assets and images are compressed.
      </p>
    </div>
  );
};

export default MoreInfo;
