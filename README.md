# Sisyphus Table Build Documentation

A React web application documenting the process of building my Sisyphus table. (At least the parts I have pictures for)

## Setup Instructions

### Step 1: Create a React App
Make sure to enter into your terminal of choice to Create the React App.

Then cd into your project folder (root folder to contain the entire project)

Run: 
    - npx create-react-app <Insert app name (all lowercase)>

This will create the template framework for the application and the folder structure for the project.


### Step 2: Install Tailwind CSS
Now that we have the React app created we need to add some additional plugins for some of the components we're running in this application.

From the previoius step we now want to cd into the application to install the plugins for the application only.

cd <into application>, created in Step 1

Run the following (sequentially):
    - npm install -D tailwindcss@3 postcss autoprefixer
    - npx tailwindcss init -p

This sets up Tailwind and its required PostCSS config.
We used tailwind 3, so use tailwindcss@3


### Step 3: Install Page Routing
To make sure we have proper page routing within the React application we need to install the React Router in the application.

Ensure were still in the application folder from Step 2. 

If not then, cd <into application> and run the following.

Run:
    - npm install react-router-dom


### Step 4: Configure Tailwind
In the folder directory for the application you should now have tailwind.config.js in your list.

We need to set the content paths to include the React files for our application.

Open the file and search for the content below. You can either copy/paste the section in content directly or take the entire section below and replace the section in the file.

Replace what's in 'content' with the following:
    - './src/**/*.{js,jsx,ts,tsx}'

OR

Replace the entire section with the following:

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
    extend: {},
},
plugins: [],
}


### Step 5: Add Tailwind to Your CSS
In your main CSS file (usually src/index.css or App.css, for me it's index.css), add the Tailwind directives

Copy/paste the following and place near the top (similiar to imports):
@tailwind base;
@tailwind components;
@tailwind utilities;

Make sure this CSS file is imported in your index.js or App.js (for me I imported index.css into App.js).


## Component Sources

### From Class Materials
- Accordion, Carousel, Header, Footer, Tooltip, Testimonial, and similar components/styling

### Adapted from Flowbite
- **Modal.js** - Based on [Flowbite Modal](https://flowbite.com/docs/components/modal/)
  - Converted HTML/JavaScript to React
  - Styled to match site theme
  - Simplified by removing footer buttons

### Adapted from Material Tailwind
- **ImageModal.js** - Based on [Material Tailwind](https://www.material-tailwind.com/docs/html/modal)
  - Converted HTML/JavaScript to React
  - Styled to match site theme
  - Simplified by removing footer buttons

### Other Sources
- Tailwind CSS utility classes
- React hooks from official docs
- React Router patterns




## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
