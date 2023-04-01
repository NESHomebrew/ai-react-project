# CS280 - Winter 2023 - Bradley Bateman

## Assignment #4

For my final assignment I have decided to experiment with the newly available ChatGPT 3.5 API. With the topic of AI being heard everywhere these days, I thought it would be useful to create a little application that would explain and demonstrate the capabilites of ChatGPT, as well as enable the user to try it out without having to sign up for a service.

## URL

The web-based version of the application is available at https://neshomebrew.github.io/ai-react-project/

- **NOTE:** due to security limitations the web-version is currently unable to access the ChatGPT API. The current available node sdk does not provide a secure method of communication and appropriately any attempt to pass an exposed token in the Auth header leads to immeadiate revocation of said token. A branch was started to move these requests server-side, but could not be completed.

Because of this unfortunate occurance I have captured a small demo to showcase the functionality.

## Local Instructions

### `Requirements`

- npm
- create-react-app
- your own org/access-token https://platform.openai.com/account/api-keys
- a .env file must be created in the root directory with the following two ENV variables
  - REACT_APP_OPENAI_API_KEY=`<YOUR_API_KEY>`
  - REACT_APP_OPENAI_ORG=`<YOUR_OPENAI_ORG>`

### `npm install`

This will add all the necessary dependencies to run the application.

### `npm start`

Runs the app in the development mode.\
It should launch a browser window automatically.
If not, open [http://localhost:3000/ai-react-project](http://localhost:3000/ai-react-project) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

This project uses gh-pages (github pages) to deploy to github. Running this command will push the current branch to the remote [gh-pages](https://github.com/NESHomebrew/ai-react-project/tree/gh-pages) branch and will deploy a production build.

More information is available here: https://github.com/gitname/react-gh-pages

## License

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

This software is "licensed" with the [UN-LICENSE](LICENSE.md)

In the spirit of open-source you are free to do whatever you want with the code with no liability or promises on my behalf.
