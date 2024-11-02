# Social Platform (Close) (Server) ⬅️ 

The server app is built using Spring Boot and provides APIs for user authentication, user management, content management, etc. It integrates with AWS services like S3 and Elastic Transcoder for scalable storage, secure video uploading, and content distribution. Spring Security has been configured for role-based access control, to secure API endpoints, and encryption of passwords. CORS has also been configured to enable secure communication between the frontend and backend.

- [Link To Web App](https://closeapp.co)

---

## Table of Contents
- [Social Platform (Close) ⬅️ BACK](#social-platform)
  - [Table of Contents](#table-of-contents)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)

---

## Technologies Used

- Java 18
- Spring Boot 3.x
- Spring Security
- Maven
- Hibernate/JPA
- PostgreSQL
- Docker
- AWS S3, Elastic Transcoder
- Postman

---

## Getting Started

### Prerequisites

- Java 17+
- Maven 3.x or Gradle
- MySQL/PostgreSQL (or your chosen database)
- AWS Account with access to S3, Elastic Transcoder
- [Any other tools] (e.g., Docker)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-backend-repo.git
   cd your-backend-repo```

2. Install dependencies:
    ```mvn install```

3. ```Set up the database and AWS services as described in the Configuration section.```
   
4. or, if using Gradle:
    ```./gradlew build```
