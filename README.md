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

### POST /captains/register

Register a new captain.

**URL**: `/captains/register`

**Method**: `POST`

**Request Body**:
- `email` (String): Captain's email.
- `fullname.firstname` (String): Captain's first name.
- `fullname.lastname` (String): Captain's last name.
- `password` (String): Captain's password.
- `vehicle.color` (String): Vehicle color.
- `vehicle.plate` (String): Vehicle plate number.
- `vehicle.capacity` (Number): Vehicle capacity.
- `vehicle.vehicleType` (String): Type of vehicle (car, auto, bike).

**Success Response**:
- **Code**: 201
- **Content**: `{ captain: Object, token: String }`

**Error Responses**:
- **Code**: 400
- **Content**: `{ errors: Array }`
- **Code**: 500
- **Content**: `{ message: "Internal Server Error" }`

### POST /captains/login

Login a captain.

**URL**: `/captains/login`

**Method**: `POST`

**Request Body**:
- `email` (String): Captain's email.
- `password` (String): Captain's password.

**Success Response**:
- **Code**: 200
- **Content**: `{ captain: Object, token: String }`

**Error Responses**:
- **Code**: 400
- **Content**: `{ errors: Array }`
- **Code**: 401
- **Content**: `{ message: "Invalid Email or Password" }`

### GET /captains/profile

Get the profile of the authenticated captain.

**URL**: `/captains/profile`

**Method**: `GET`

**Headers**:
- `Authorization` (String): Bearer token.

**Success Response**:
- **Code**: 200
- **Content**: `{ captain: Object }`

**Error Responses**:
- **Code**: 401
- **Content**: `{ message: "Unauthorized" }`

### GET /captains/logout

Logout the authenticated captain.

**URL**: `/captains/logout`

**Method**: `GET`

**Headers**:
- `Authorization` (String): Bearer token.

**Success Response**:
- **Code**: 200
- **Content**: `{ message: "Logged Out Successfully" }`

**Error Responses**:
- **Code**: 401
- **Content**: `{ message: "Unauthorized" }`
