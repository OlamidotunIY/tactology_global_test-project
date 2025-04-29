# Local Development Setup

To test the frontend functionalities, both the frontend and backend must be running locally. Follow these steps to set up the necessary environment variables.

## 1. Frontend Setup

In the root directory of your frontend, create a `.env` file and add the following environment variable:

```env
NEXT_PUBLIC_API_URL=http://localhost:3500
```

## 2. Backend Setup
In the root directory of your backend, create a .env file and add the following environment variables:

```
FRONTEND_URL=http://localhost:3000
REFRESH_TOKEN_SECRET='MYSECRET'
ACCESS_TOKEN_SECRET='MYSECRET'
PORT=3500
DATABASE_URL=postgresql://<username>:<password>@localhost:5432/<database_name>
Make sure to replace <username>, <password>, and <database_name> with the appropriate values for your local setup.
```
