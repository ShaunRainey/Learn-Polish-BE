Project step by step:

- npm init -y #This will create a package.json 

- npm install express

- npm install jest -D 

    - Predominantly used for UNIT TESTING, so testing utility functions 
    - Supertest will be used for INTEGRATION TESTING, supertest is specifically for HTTP requests as it allows you to send fake requests
      to an API without the need for a real client like Postman or Insomnia

- change scripts in package.json to use jest

- create git ignore

    - .env is of importance to not allow public visibility of sensitive data

- create app.js

- npm i -D nodemon

    - nodemon restarts the server everytime a change is made to the javascript file
    - Developer dependancy: A dependency that only the developer will need to use whilst building the application
    - as this is being saved as a dev dependancy, "npx nodemon app.js" is required to run, rather than just nodemon app.js (this would work for
      global installation)
    - In this case, I've added the script: "dev":"nodemon app.js" which can be run using "npm run dev". npm run ... will run the specified script
      from the package.json file


# Database Info

- npm install dotenv

- npm install pg
    
    - this is the installation for node-postgres
    - had a huge issue with getting the environment variables to play along, had to delete them:
        windows key + pause -> Advanced system settings -> environment variables
    - then restarted the computer, .env file seems to be loading now

- created .sql file

    - add script to package.json to setup-db

- psql started misbehaving

    - in windows services, manually set postgres to running
    - reset global variable for PGUSER to 'coding' 

- npm install xlsx pg

    - this is the library that will read the ods (spreadsheet) file data

- npm install pg-format

- created seed file and run seed
    
    - there are utility functions within the seed file that are single use. As a result, seperating them into a utility function file would be
      unneccessary, so the testing for these would be covered by the integration testing
    