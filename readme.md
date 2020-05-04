
## Task Statement
Required stack: Webix and Node.js

You would need to create single page interface for creating users and assign roles to them.

We expect to see on the screen:

- button with roles popup
  in the popup we might have edit, add and remove roles
- list of users
  for each user: email and roles
- toolbar with add/remove user button
- form with details of selected or new user.
  In the form we could edit name, email and select roles.
  also in the form should be a custom widget: canvas with plain square of 70% minimum of height and width.

All users and details should be passed to Node back-end and be available on page reloading.

Permanent storage is not important, the best option would be if you store all data in Node.js process memory.

# Installation Instructions

Run npm install or yarn install
Run npm start or yarn start
Open http://localhost:3000