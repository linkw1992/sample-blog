# Final Project

* Submit a PR to update this directory with your final project code
* Your work must be your own - no group projects
* Due by 11:59pm Tue Apr 23 
  
## Goal
Your assignment will be to:
* create a React SPA using create-react-app
* create a backend server that will host the BUILT (using `npm run build`) React app as well as provide REST services
* Have sufficient visual changes to demonstrate the concepts of using CSS and updating the look of a dynamic web application by adding/removing classes from elements
* Demonstrate the best practices taught in class
* Your application must be usable by multiple users simultaneously

## Examples
* A chat application
* A review site
* A web forum/discussion site
* A shopping site

## Requirements

### Installation
* after `npm install`, the application is ready to use
* `npm run server` will begin the server
* While `npm start` will run the CRA dev-server, you will be graded on how it runs **WITHOUT** that.  It should work using only `npm run server`
* If `npm run build` is run, any changes made will be saved and built and `npm run server` will show those changes without additional steps

### Rest Services
* The REST services must provide at least two different HTTP methods according to REST principles
* The app must make use of these in response to user actions and update the visuals in response

### React application
* Must be created using create-react-app
* Must follow best practices from class

### JS
* You must have non-JSX JS files as well that export functions that your components import as needed
* These should contain non-visual logic and must follow the best practices from class

### CSS
* You must have CSS that demonstrates the details listed in the Goals
* Your CSS must follow the best practices from class

### Database
* No database or long-term persistence is required, but it is allowed 
* If included, it must not prevent the instructor or the TAs from being able to download and execute your application (hint: we won't have your database if it's outside of the repo, and we won't have any logins, and you don't want to put sensitive information like passwords into a respository)

### Security
* You must follow the security best practices given in class where applicable

### Allowances
* No form of login is required, but it is allowed
* You may use an external non-JS based icon library if you desire, but it is not required
* You may make service calls to other services beyond the ones you wrote, so long as you fulfill the requirements of what you must write

### Restrictions
* No external JS libraries other than `express`, the code installed by `create-react-app` (used only as CRA configured it), `react`, `redux`, and `react-redux`
* You may also use external JS libraries to allow for DB access, subject to the Database Requirements above
* No external CSS libraries
* No external component libraries (no react-bootstrap)

# sample-blog
