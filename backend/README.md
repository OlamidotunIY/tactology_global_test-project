
# **Backend Setup Instructions**

Follow these steps to set up and run the backend project:

---

## **Prerequisites**

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) (latest stable version)
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

### **3. Start the Development Server**

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
               username
           }
       }
   }
   ```

2. **Update Profile**
   ```graphql
   mutation UpdateProfile($fullname: String!) {
       updateProfile(fullname: $fullname) {
           id
           username
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
               username
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
           message
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
               username
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
               username
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
               username
           }
           subDepartments {
               id
               name
           }
       }
   }
   ```
---

## **Hosted Versions**

- **Frontend**: You can access the live frontend [here](https://tactology-global-test-project-frontend.onrender.com).
- **Backend**: You can access the live backend [here](https://tactology-global-test-project.onrender.com).

---
