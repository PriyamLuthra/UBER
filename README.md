# API Documentation

## Endpoints

### POST /users/register
// ...existing code...

### POST /users/login

Login a user.

**URL**: `/users/login`

**Method**: `POST`

**Request Body**:
- `email` (String): User's email.
- `password` (String): User's password.

**Success Response**:
- **Code**: 200
- **Content**: `{ user: Object, token: String }`

**Error Responses**:
- **Code**: 400
- **Content**: `{ errors: Array }`
- **Code**: 401
- **Content**: `{ message: "Invalid Email or Password" }`

### GET /users/profile

Get the profile of the authenticated user.

**URL**: `/users/profile`

**Method**: `GET`

**Headers**:
- `Authorization` (String): Bearer token.

**Success Response**:
- **Code**: 200
- **Content**: `{ user: Object }`

**Error Responses**:
- **Code**: 401
- **Content**: `{ message: "Unauthorized" }`

### GET /users/logout

Logout the authenticated user.

**URL**: `/users/logout`

**Method**: `GET`

**Headers**:
- `Authorization` (String): Bearer token.

**Success Response**:
- **Code**: 200
- **Content**: `{ message: "Logged Out Successfully" }`

**Error Responses**:
- **Code**: 401
- **Content**: `{ message: "Unauthorized" }`
