<h1 align="center">
  <br>
  <a href="http://www.tradelab.fr"><img src="http://tradelab.com/wp-content/themes/tradelab/library/img/home_Lentreprise.png" alt="tradelab" width="200"></a>
  <br>
    Tradelab - Saas Messaging
  <br>
</h1>

<h4 align="center">An ultra fast Node.js application for handling messaging (SSE)</h4>

<p align="center">
  <!-- <a href="#environments">Environments</a> • -->
  <a href="#how-to-install">How To Install</a> •
  <a href="#techs">Techs</a>
</p>


## How To Install

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/tradelab/saas-messaging.git

# Go into the repository
$ cd saas-messaging

# Install dependencies
$ npm install

# Run the app using nodemon and ts-node for hot reloading
$ npm run start
```

It will launch a live compile and hotreload the application as you edit it.

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Techs

### Commands

* run the application : ` npm run start `

* build the application : ` npm run build `

* run the linter : ` npm run ts:lint `

* run the test : ` npm run test `

### Project Structure
The most obvious difference in a TypeScript + Node project is the folder structure.
In a TypeScript project, it's best to have separate _source_  and _distributable_ files.
TypeScript (`.ts`) files live in your `src` folder and after compilation are output as JavaScript (`.js`) in the `lib` folder.
The `test` folder remain top level as expected.

The full folder structure of this app is explained below:

> **Note!** Make sure you have already built the app using `npm run build`

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **lib**                  | Contains the distributable (or output) from your TypeScript build. This is the code you ship  |
| **node_modules**         | Contains all your npm dependencies                                                            |
| **src**                  | Contains your source code that will be compiled to the lib dir                                |
| **src**/index.ts         | Entry point to your express app                                                               |
| **test**                 | Contains your tests. Seperate from source because there is a different build process.         |
| jest.config.js           | Used to configure Jest                                                                        |
| package.json             | File that contains npm dependencies as well as build scripts                                  |
| tsconfig.json            | Config settings for compiling server code written in TypeScript                               |
| tslint.json              | Config settings for TSLint code style checking                                                |

### Testing
For this project, I chose Jest as our test framework. While Mocha is probably more common, Mocha seems to be looking for a new maintainer and setting up TypeScript testing in Jest is wicked simple.

Jest's configuration lives in `jest.config.js`

### Links

* [TypeScript with Node.js](https://basarat.gitbooks.io/typescript/docs/quick/nodejs.html)

* [TypeScript Node Starter by Microsoft](https://github.com/Microsoft/TypeScript-Node-Starter)

* [Jest](http://jestjs.io/docs/en/getting-started)