<div align="center">

  <img src="https://outflowdesigns.com/wp-content/uploads/2021/07/image_01-Social-Media.jpg" alt="logo" width="600" height="350" />

  <h1>SOCIAL MEDIA WEBAPP</h1>

</div>

<hr>
<h2>Description</h2>
It's a Social Media Rest Api, where you can <b>signup/login</b> using <b>gmail</b> and start posting any photo or writing somthing and than post after posting it can be <b>update</b> or <b>delete</b>. You can <b>like </b>or <b>dislike</b> on others post and also <b>search the post.</b> Also you can <b>search others account</b> and <b>following others</b> or <b> Unfollow</b>.

  
### Concepts
#### This website is build on three basic concepts

- Posts: The root concept of the website is any photos or any story has posts .

- Like or Dislike: One user can clicking Like below a post is a way to let people know that the user enjoy it.
and if one can click like by mistake on any post than he dislike it and the like is withdraw on the post.

- Follow and Unfollow: A user who can interacts with the other user, can be follow this user. And if any user is no longer to interacets with a perticular one who can already belong his following list he can unfollow him. 


<h2>Technologies</h2>
<table>
      <tbody>
        <tr>
          <th>Express.js</th>
           <th>Node.js</th>
           <th>Bcrypt</th>
        </tr>
          <tr>
           <th>Mongodb</th>
           <th>REST Api</th>
         </tr>
      </tbody>    
</table

## Features
<table>
      <tbody>
         <tr>
          <td>Create posts then delete or update the post.</td>
        </tr>
         <tr>
          <td>Like others post and if any post like by mistake then dislike it.</td>
        </tr>
        <tr>
          <td>Search posts by post title.</td>
        </tr>
        <tr>
          <td>Search a post in a particular timeline of a user.</td>
        </tr>
          <tr>
          <td>One user can follow or unfollow to others.</td>
        </tr>
        <tr>
          <td>Search a user by user id.</td>
        </tr>
         <tr>
          <td>Register and Sign in using gmail and also user create a password.</td>
        </tr>
         <tr>
          <td>User can update or delete the account.</td>
        </tr>
      </tbody>    
</table>

### NPM Packages
- express
- helmet
- bcrypy
- mongoose
- morgan
- dotenv
- nodemon
### Other Applications
- Postman
- Vs code

## How to setup locally and getting started to improve and add new features.
### 1. Create a new directory, cd into it and run 'git init' .
### 2. Clone this repository
### 3. Create a .gitignore file add node-modules, .env .
### 4. Run 'npm installl' , it will install all npm packages and dependencies .
### 5. Create and setup a app in google developer console and obtain CLIENT_ID and CLIENT_SECRET
### 6. Obtain Refresh token by providing CLIENT_ID, CLIENT_SECRET from google's OAuth 2.0 playground to access Gmail Api 
### 7. Setup mongodb cloud database and obtain connection url
### 8. Create a .env in config directory inside projects root directory.
### 9. setupp .env variables 
- PORT
- MONGO_URI
- USER_EMAIL
### 10. Replace baseUrl with your host address (eg:- http://localhost:3000/ ) for Api call in client side scripts present inside root -> public -> js
### 11. Run 'npm run dev' to run the app in development mode
### 12. open host addess to view the website.
