# Introduction
Welcome to the TypeScript/Webpack/Jest "newbie" project
* This is a test Front-end project. 
* This project contains three components written in React just as a test for this specific project.
* As I was learning HTML, CSS, React, TypeScript, Webpack, Git, JavaScript in depth and being completely new to typescript but wishing to use TypeScript with React, I decided to create a project which uses TypeScript for typechecking and compilation, Webpack for bundling of relative and non-relative modules/libraries provided through the npm packages and Jest for writing tests.
* The goal of the project was thus to configure all of the tools together in a test project without the use of "automated" generation tools such as CRA with typescript but to learn how everything really works in order to be able to customize the project to the exact need. 

# Usage
You can start a development server listening on port 3000, execute tests by running npm run test or build a project for production:
* npm run start - starts a devserver on **http://localhost:3000** 
* npm run test - runs test units code written in ***.test.tsx?** files
* npm run build - compiles a project into the **"projectRootDir/build"** folder

# Features
<p>Development mode:</p>
<ul>
  <li>server runs with node powered by the express framework and configured with webpack dev server middleware</li>
  <li><b>port settings in webpack.config.js, devServer.port (default: 3000)</b></li>
  <li>live reload plugin is included in the development server, so that the page would effectively auto-reload upon source code changes and bundler re-run</li>
</ul>

# Tools list
* TypeScript (tsc for typechecking and ts-loader for the bundler - webpack)
* Webpack (For bundling files together, handling and emitting assets)
* Jest (For running tests with react-dom/utils, react-test-renderer or react-testing-library)
