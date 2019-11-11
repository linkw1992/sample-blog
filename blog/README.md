This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Functions

This project is a blog web application. The main fuction is:
1. The portal is http://localhost:4000. The default page is login page.
2. I put some default data in defaultData.js. It contains some users and blogs, as well as some defaultUsers, which means "usernames that registrated."
3. The login button will be disabled when no input in the text field. If input a username that is not in the defaultUser list, it will not login and show the error.
4. If want to login with new username, first we should register. E.g., Input "aaa" in register field, then hit the button, and then we can login with username "aaa". If the username has been registered, it will show that this name has been registered.
5. After login, we can input blog title and content to push new a blog. We can use enter key or Send button to push a new blog, but only when title and content are both not null.
6. We can delete each blog, if and only if the blog's auther is the username or it will show error code.
7. The logout button can make the username logout.
8. This app can be used by multipule users simultaneously. E.g., we may open 2 windows of http://localhost:4000, and one username is A, and another is B, then ther user list can see both of A and B on both window. What's more, when A post a new blog, B can see it, vice versa. But B cannot delete A's blog.

## About Project Requirements

1. This app is an SPA app. It's created using create-react-app.
2. This server side is built via npm run build. The server.js file used node.js and express with Restful.
3. This app worked with npm run server, and the portal is http://localhost:4000.
4. It works simultaneously by multiple users.
5. It uses GET and POST http method, and uses them to response to user actions to manage the status and change the visual and functions.
6. It contains server.js and services.js to fetch data from server side to client side.
