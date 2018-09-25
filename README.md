# Burger
A simple  full-stack application that utilizes common NPM packages for creating and updating a MySQL database.

Jaw’s DB is used alongside Heroku to host this application

Users can “create” or “devour” burgers via the front-end of this application.

Live link: [Eat the Burger!](https://infinite-atoll-57012.herokuapp.com/burgers)

# Packages Used
- [ ] Node.js
- [ ] MySQL
- [ ] Handlebars - http://handlebarsjs.com/
- [ ] body-parser NPM Package - https://www.npmjs.com/package/inquirer
- [ ] express NPM Package - https://www.npmjs.com/package/express
- [ ] mysql NPM Package - https://www.npmjs.com/package/mysql
- [ ] handlebars NPM Package - https://www.npmjs.com/package/handlebars
- [ ] express-handlebars NPM Package - https://www.npmjs.com/package/express-handlebars


# Instructions for running your own version of this application
- [ ] Import this repo into one a new repo of your own on GitHub
- [ ] Clone the repo to your local machine
- [ ] Create an Heroku account if you do not have one
- [ ] Login to Heroku in the command line with 
`heroku login`
- [ ] Login to your account at heroku.com and add the JawsDB MySQL resource
![](Screen%20Shot%202018-09-25%20at%202.38.39%20PM.png)
- [ ] Once you’ve added Jaws DB MySQL  click the hyperlink to bring you to your DB information
- [ ] Use this DB information to insert the Host, Username, and Password credentials into a MySQL client (MySQL Pro, MySQL Server, etc.)
- [ ] Run the schema.sql and seeds.sql queries from the DB folder in your client.
- [ ] In the command line run:
`git push heroku master`
- [ ] Open your application from the command line with:
`heroku open`
- [ ] You will then see your own working version of the application, feel free to alter the content in your database for another use!
