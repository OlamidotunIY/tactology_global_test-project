
# **Backend Setup Instructions**

Follow these steps to set up and run the backend project:

---

## **Prerequisites**

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) (latest stable version)
- [Docker](https://www.docker.com/) (for containerized services like PostgreSQL)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart) (for database migrations)

---

## **Setup Instructions**

### **1. Install Dependencies**

Run the following command to install all project dependencies:

```bash
yarn install
```

---

### **2. Configure Environment Variables**

- Create a `.env` file in the project root directory (if not already present).
- Add or update the required environment variables. For example:

  ```env
  DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>
  ACCESS_TOKEN_SECRET=<your_access_token_secret>
  REFRESH_TOKEN_SECRET=<your_refresh_token_secret>
  ```

- Replace `<username>`, `<password>`, and `<database_name>` with your PostgreSQL credentials.

---

### **3. Edit `docker-compose.yml`**

- Ensure the `docker-compose.yml` file has the correct configuration for your database and other services.
- Update any ports, volumes, or environment variables as necessary to match your local setup.

---

### **4. Run Prisma Migrations**

Generate the database schema by running the following command:

```bash
npx prisma migrate dev
```

---

### **5. Start Docker Services**

Start the PostgreSQL and Redis services (or any other dependencies) using Docker:

```bash
docker-compose up
```

---

### **6. Start the Development Server**

Run the project in development mode using Yarn:

```bash
yarn start:dev
```

---

## **API Documentation**

### **Mutations**

1. **Register User**
   ```graphql
   mutation RegisterUser {
       register {
           user {
               id
               fullname
               email
           }
       }
   }
   ```

2. **Update Profile**
   ```graphql
   mutation UpdateProfile($fullname: String!) {
       updateProfile(fullname: $fullname) {
           id
           fullname
       }
   }
   ```

3. **Create Department**
   ```graphql
   mutation CreateDepartment($name: String!, $subDepartment: [SubDepartmentDto!]) {
       createDepartment(name: $name, subDepartment: $subDepartment) {
           id
           name
           createdAt
           updatedAt
           user {
               id
               fullname
           }
           subDepartments {
               id
               name
           }
       }
   }
   ```

4. **Delete Department**
   ```graphql
   mutation DeleteDepartment($id: String!) {
       deleteDepartment(id: $id) {
           id
           name
           createdAt
           updatedAt
           user {
               id
               fullname
           }
           subDepartments {
               id
               name
           }
       }
   }
   ```

5. **Update Department**
   ```graphql
   mutation UpdateDepartment($id: String!, $name: String!) {
       updateDepartment(id: $id, name: $name) {
           id
           name
           createdAt
           updatedAt
           user {
               id
               fullname
           }
           subDepartments {
               id
               name
           }
       }
   }
   ```

---

### **Queries**

1. **Get Department**
   ```graphql
   query GetDepartment($id: String!) {
       getDepartment(id: $id) {
           id
           name
           createdAt
           updatedAt
           user {
               id
               fullname
           }
           subDepartments {
               id
               name
           }
       }
   }
   ```

2. **Get Departments**
   ```graphql
   query GetDepartments {
       getDepartments {
           id
           name
           createdAt
           updatedAt
           user {
               id
               fullname
           }
           subDepartments {
               id
               name
           }
       }
   }
   ```

---

## **Additional Notes**

- **Database Setup**: Ensure your PostgreSQL server is running and the database specified in `DATABASE_URL` exists before running migrations.
- **Testing the API**: Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test API endpoints after the server starts.
- **Environment Variable Management**: For secure management of secrets, consider using tools like [dotenv](https://www.npmjs.com/package/dotenv) for local development and environment variables for production deployment.

---

## **Troubleshooting**

- **Docker Issues**: If Docker services fail to start, check for port conflicts or missing configurations in the `docker-compose.yml` file.
- **Prisma Errors**: If migrations fail, ensure the database connection string (`DATABASE_URL`) is correct and accessible.
- **Runtime Errors**: Check the logs for specific error messages and ensure all dependencies are properly installed.

---

## **Hosted Versions**

- **Frontend**: You can access the live frontend [here](https://tactology-global-test-project.vercel.app).
- **Backend**: You can access the live backend [here](https://tactology-global-test-project.onrender.com).

---
