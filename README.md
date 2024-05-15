# Tech_Blog

## Task

Our task this week is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. We build this site completely from scratch and deploy it to Render. Our app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```
## Description

 ![License](https://img.shields.io/badge/License-MIT-yellow)

 ```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Mock-Up

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./assets/TechBlog.gif)

## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)
- [Contribution](#contribution)
- [Contact](#contact)
- [Questions](#questions)
    
## Installation 

The following necessary dependencies must be installed to run the application.

  nodejs, express, mysql2, express-sessions, express-handlebars, dotenv, bcrypt, sequelize, connect-session-sequelize

Install the dependencies by following command in terminal,
```
npm install or npm i
```

## Usage

 Application can be invoked by
 ```
 npm start or node server.js 
 ```
 command in terminal or you can use the deployed to `Render` link.

## Test
  
  N/A

## License

This project is licensed under :

 [MIT](https://opensource.org/licenses/MIT)

For more information about the license, check the above link.

## Contribution

Coding Boot Camp provides guidance

## Contact

* GitHub :[bindi-v](https://github.com/bindi-v)

* Email : bindi.vaghela@gmail.com
    
## Questions

If you have any questions, please reach out to my Github,

### Deployed Link 

* [The URL of the functional, deployed to Render application.](https://tech-blog-qf71.onrender.com)

* [The URL of the GitHub repository](https://github.com/bindi-v/Tech_Blog)

#### Thank you for visiting my Github!
