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
