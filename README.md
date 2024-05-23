# Studio Ghibli API

## 🎯 Objective

Develop a user REST API, considering at least the following services:

- User creation
- Getting all users
- Obtaining a specific user
- Updating a user
- Deleting user(s)

Users must have a role (admin, films, people, locations,
species, vehicles) and be able to consume a GET from the Studio Ghibli API, according to their role.
according to their role

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### 📋 Prerequisites

#### .env file

It is necessary to mention that the service needs [environment](.env.template) variables which are very necessary for the operation of the service.

#### Database

For the database, we chose to use a local database by means of [docker compose](docker-compose.yml)

A startup [file](./mongo-init.js) was created to generate the mongo db user and password.

```
user = banpay
password = 1q2w3e4r
db name = studio-ghibli
```

To up the containers simply use the following command in the api folder

```shell
docker compose up -d
```

### Installation 🔧

To install the dependencies of the service simply use the following command

```shell
npm install
```

### Running 🆙

Depending on the environment, it is recommended to initialize the project.

- Dev
  ```shell
  npm run dev
  ```
- Prod

  ```shell
  npm run build
  npm run start
  ```

## 📦 Deployment

The API is currently hosted in [railway](https://studio-ghibli-production.up.railway.app/api), where it's serving requests around the clock. As the sole architect and developer, I've ensured that the deployment process is streamlined and the service is robust and user-friendly.

### Deployment Features:

- **Always On**: The service is up and running 24/7, ready to serve your requests at any time.
- **Ease of Use**: Designed with simplicity in mind, making it straightforward to integrate with your applications.
- **Reliability**: Consistent and dependable performance, providing a seamless experience for all users.
- **Solo Craftsmanship**: Every line of code has been written with care and a deep understanding of the needs it serves.

To start using the API, simply direct your HTTP requests to the provided endpoints and you're good to go. It's my commitment to provide a service that not only meets but exceeds your expectations.

## Documentation 📄

Documentation was created in swagger so first you have to run the project and it is in the [/docs](https://studio-ghibli-production.up.railway.app/docs) path.

## Built with 🛠️

- [NestJS](https://nestjs.com/) - NodeJS framework
- [Npm](https://www.npmjs.com/) - Dependency handler
- [MongoDB](https://www.mongodb.com/) - Database
- [Typescript](https://www.typescriptlang.org/) - Language
- [Swagger](https://swagger.io/) - Documentation

## Author ✒️

- **Roberto Miron Najera** - _Initial Work_ - [betonajera9](https://github.com/villanuevand)

## License 📄

This project is under the (MIT) License - see the [LICENSE](LICENSE) file for details.

---

⌨️ with ❤️ by [betonajera](https://github.com/BetoNajera9) 😊
