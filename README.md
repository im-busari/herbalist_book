## Description 
E-commerce web app built using React, Typescript, Express, Bootstrap, MongoDB, Redux, NodeJS. 
The design was initially made using Adobe XD and later on was broke down into smaller components which were designed using React, Bootstrap, Typescript and a common package known as styled-components (https://www.npmjs.com/package/styled-components).
For the backend I created a seperate folder [hb_backend]. I used NodeJS, Express and MongoDB. Of course the development was supported using various packages and tools such as Postman (for example).


Folder Structure:
    |
    |- anom => all pages that you can access without authorization (as a guest user)
    |- layout => Components linked to the design in general, like [Header], [Footer], [Navigation], etc...
    |- lib => shared components, constants and/or other files that could be used everywhere in this app or even outside of it if I want to.
    |- mock-data => JSON data files that I use to test my code.
    |- store => Each folder has the following setup => [reducer], [actions], [sagas], [types]. New reducers should be properly add to
    |           [store/index.ts] and later on updated in [index.tsx]. Please note that there is also [Store.tsx] file under the [src]
    |           folder (src/Store.tsx)
    |- utils
 
## Setup

This web app is connected to a REST API. Please ensure that you have a stable internet connection before you run the app. 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

## Learn More

Feel free to drop a feedback, recommendations on the following e-mail: [im.busari@gmail.com]
