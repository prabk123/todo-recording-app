import React from "react";
import Container from "Shared/Container";
import Title from "Shared/Title";

const MoreInfo = () => {
  return (
    <Container style={{ height: "2000px" }} maxWidth={"md"}>
      <Title level={4}>Installation Instructions</Title>
      <p>
        Navigate to{" "}
        <a
          href="https://github.com/prabk123/todo-recording-app"
          target="_blank"
        >
          https://github.com/prabk123/todo-recording-app
        </a>
        . You can then start the application in a development environment by
        running the following commands:
      </p>
      <pre>
        <code>
          $ git clone git@github.com:prabk123/todo-recording-app.git
          <br />$ cd todo-recording-app
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

      <Title level={4}>Testing</Title>
      <p>
        The application has been unit tested using Jest and Enzyme. The
        following commands will let you run the tests in a development
        environment.
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
    </Container>
  );
};

export default MoreInfo;
