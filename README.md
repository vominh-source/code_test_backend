<<<<<<< HEAD
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
=======
# G-SCORES
A web application for THPT 2024 exam score lookup and analysis – search by registration number, categorize performance levels, view subject-wise statistics and top 10 Group A students.



![Homepage](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/home_page.png)

<!-- Replace with actual image URL if available -->

<div align="center">
  <p align="center">
    An web app for looking exam score
    <a href="https://youtu.be/TftywGnUuWE">View Demo</a>
  </p>
</div>

## 📝 HOW TO RUN
### 🧑‍💻 Guideline
- My project include 2 folder: backend and front end.
- Run backend then run front end.
- After run front end, go to [https](http://localhost:3000) to view the project
### 🖥️ Frontend

- **Link**: [https://github.com/vominh-source/code_test_frontend](https://github.com/vominh-source/code_test_frontend)

```bash
npm install 
npm run dev
```

### 🛠️ Backend

- **Link**: [https://github.com/vominh-source/code_test_backend](https://github.com/vominh-source/code_test_backend)

```bash
npm install              # Install project dependencies
npm run db:dev:up        # Start PostgreSQL container via Docker
npm run prisma:dev:deploy  # Apply Prisma migrations to the database
npm run start:dev        # Start NestJS server in development mode
```




---




## 🎬 Features Overview

### 📝 **Feature 1: Search Score**

- **Description**: User will enter candidate number and receive the result of subjects.
![Search Score](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/search_scores.png)

### 🎤 **Feature 2: Subject Overview**

- **Description**: User chooses the subject to view and analyze the score distribution. The application will display a statistical chart showing the number of students falling into four performance levels:

- Excellent (≥ 8 points)

- Good (6 ≤ score < 8)

- Average (4 ≤ score < 6)

- Poor (< 4 points)

![Subject Overview](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/subject_overview.png)

### 🖼️ **Feature 3: All Subject Overview**
- **Description**: This feature kinda similar to feature 2 (Subject Overview), but the difference is that it will show the chart for all subjects.
![All Subject Overview](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/all_subjects_overview.png)

### ✂️ **Feature 4: Top 10 Group A Students**
- **Description**: This feature displays a ranked list of the top 10 students with the highest total scores in Group A, which includes three subjects: Math, Physics, and Chemistry.
![Top 10 Group A Students](https://github.com/vominh-source/code_test_frontend/blob/main/public/readme_images/top_10_A.png)

## 🧑‍💻 Tech Stack

### 🖥️ Frontend

- **Framework**: Next.js (latest)
- **UI Library**: React.js (Hooks)
- **Styling**: Tailwind CSS (with **TailAdmin** template)
- **Charts**: Recharts (score visualizations)

### ⚙️ Backend

- **Framework**: NestJS (TypeScript)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Dev Tools**: Prisma Studio, Docker

---

## 🏗️ Architecture

The application follows a modern full-stack architecture:

- 🎨 **Frontend (Next.js + TailAdmin)**  
  Provides an interactive UI for score lookup, chart-based analysis, and ranking

- ⚙️ **Backend (NestJS)**  
  Handles API logic, data processing, and classification by score level

- 📊 **Data Visualization**  
  Subject-wise score distribution displayed using Recharts

- 🐳 **Containerized Environment**  
  PostgreSQL and backend managed via Docker for consistency and portability

---

Feel free to explore, contribute, or fork the project!
>>>>>>> 7eb96586839fb1dfa1fb0c0dfc006259f29ac151
