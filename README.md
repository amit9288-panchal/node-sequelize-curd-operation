# Node Web Application With Curd Operation


Simple web application with CRUD operations using Node.js.
This app allows users to manage a list of items (e.g., products or tasks) with basic Create, Read, Update,
and Delete (CRUD) functionalities.

__________________

## Installation

1. **Clone the Repository:**
   ````
   git clone https://github.com/amit9288-panchal/node-sequelize-curd-operation.git
   cd node-sequelize-curd-operation
   ```` 
2. **Install Dependencies:**   
    ````
   npm install
   ````
3. **Create the .env File: Copy the .env.example file to .env:**
    ````
    cp .env.example .env
   ````
4. **Set Up Your Database:** 
    ````
    DB_DIALECT=mysql
    DB_HOST=127.0.0.1
    DB_USER=your_database
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    DB_NAME=your_database_name
   ````
5. **Execute Migration:**    
    ````
    sequelize db:migrate
    ````
6. **Run:**
    ````
    npx nodemon src/app.js
    ````


