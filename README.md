# Social Platform (monorepo)

**This is a monorepo containing two main applications**:

- **Client**: A React application located in the `/client` directory.
    - Integrates Redux and Protected Routes to provide a personalized user experience and context management. 
    - Uses Formik and Yup for Form validation.
    - Integrates React-Easy-Edit to support in-place profile updates (picture,bio,username etc.)
 
- **Server**: A Spring Boot application located in the `/server` directory.
    - Provides APIs for user authentication, user management, content management, etc.
    - Integrates with AWS services like S3 and Elastic Transcoder for scalable storage, secure photo/video uploading, and
      content distribution.
    - Configured with Spring Email to automate email verification during user registration.
    - Configured with Spring Security for auth-based access control, to secure API endpoints, and encryption of passwords.
    - CORS has also been configured to enable secure communication between the frontend and backend. 

### Live Web App

- [https://www.closeapp.co](https://closeapp.co)

## Table of Contents
- [Social Platformn (Monorepo)](#social-platform-monorepo)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Applications](#running-the-applications)
  - [Configuration](#configuration)


## Technologies Used

- **Client**: React, Typescript, Axios, Redux, React Router, Material UI, React-Emotion, Styled Components, React-Easy-Edit, Formik, Yup
- **Server**: Java 18, Spring Boot 3.x, Spring Security, Spring Email, Maven, Hibernate/JPA, PostgreSQL, Docker, JWTs, AWS S3, Elastic Transcoder, CloudFront, Postman


## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Java 18+** for the Spring Boot server
- **Node.js 14+** and npm for the React client
- **Maven 3.x** or **Gradle** (if using Gradle to build the server)
- **PostgreSQL** or another database for the backend (configured in application.properties)
- **Docker** (optional, for containerized deployment)
- **AWS Account** with access to S3 and CloudFront (if using AWS services)
- [Any other tools] (e.g., Kubernetes)

### Installation

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/yourusername/your-monorepo.git
   cd your-monorepo

3. **Install client Dependencies:** Navigate to the ```client``` directory and install dependencies

    ```bash
    cd client
    npm install

4. **Install Server Dependencies:** Navigate to the ```server``` directory and install dependencies.

       cd ../server
       mvn install

   or, if using Gradle:
      ```bash
      ./gradlew build

### Running the Applications


1. **Start the Server:** In the ```server``` directory, start the Spring Boot server

       mvn spring-boot:run

   or, if using Gradle:
      ```bash
      ./gradlew bootRun

3. **Start the Client:** Open a new terminal, navigate to the ```client``` directory, and start the React app.
   
    ```bash
    cd ../client
    npm start

## Configuration

### Environment Variables
- **Client:** Add a .env file in the client directory to configure the environment variables.
  
  ```bash
  REACT_APP_API_URL=http://localhost:8080/api

- **Server:** Configure ```application.properties``` in the ```server/src/main/resources``` directory.
  
  ```bash
  server.port=8080
  spring.datasource.url=jdbc:mysql://localhost:3306/yourdatabase
  spring.datasource.username=yourusername
  spring.datasource.password=yourpassword

