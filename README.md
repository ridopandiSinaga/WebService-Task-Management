## BackEnd

## Stacks

- NodeJS
- MySQL
- ExpressJS
- Sequelize ORM
- Express Validator
- Mocha
- Chai
- Mocha Simple Html Reporter

## TODO Tasks

- [x] CRUD Todos
- [x] CRUD Items

## Requirement

For running this project please install nodejs and mysql.

## Getting Started to the development

Clone the repository :

```
git clone https://github.com/ridopandiSinaga/Backend-Task-Management.git
```

Switch to the repo folder :

```
cd express-todo-list
```

Install all the dependencies using `npm` or you can using `yarn` :

```
npm install or yarn install
```

Set configuration database like on your environtment system,to the config file on mode `development` in file `app/config/config.js` :

```
"development": {
    "username": "DATABASE_USER_NAME",
    "password": "DATABASE_PASSWORD",
    "database": "DATABASE_NAME",
    "host": "DATABASE_HOST",
    "dialect": "mysql"
  },
```

Build database:

```
npx sequelize-cli db:create
```

Build the table:

```
npx sequelize-cli db:migrate
```

Run the server :

```
npm run start
```

You can now access the server at http://localhost:3000
