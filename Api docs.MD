# Hive Media API Documentation

## Base URL
`https://hivemedia-cyb0.onrender.com`

---

## Signup Endpoint

### Endpoint
`https://hivemedia-cyb0.onrender.com/api/v1/auth/signUp`

### Payload (Required)
- `firstName`: Type of string
- `lastName`: Type of string
- `email`: Type of string
- `password`: Type of string

### Responses
- **onSuccess**: `{ message, status }`
- **onError**: `{ message, status, error }`

- *Status* is either success or error.

### Example with JavaScript
```javascript
const postData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "securePassword"
};

const url = 'https://hivemedia-cyb0.onrender.com/api/v1/auth/signUp';

const data = querystring.stringify(postData);

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(data),
  },
};

const response = await fetch(url, options);
```

---

## Login Endpoint

### Endpoint
`https://hivemedia-cyb0.onrender.com/api/v1/auth/logIn`

### Payload (Required)
- `email`: Type of string
- `password`: Type of string

### Responses
- **onSuccess**: `{ message, status }`
- **onError**: `{ message, status, error }`

- *Status* is either success or error.

---

## Password Reset Endpoint

### Endpoint
`https://hivemedia-cyb0.onrender.com/api/v1/auth/forgotPassword`

### Payload (Required)
- `email`: Type of string

### Responses
- **onSuccess**: `{ message, status }`
- **onError**: `{ message, status, error }`

- *Status* is either success or error.

- An email will be sent with a link to reset the password on success.

---

## Confirm Password Reset Endpoint

### Endpoint
`https://hivemedia-cyb0.onrender.com/api/v1/auth/confirmCode`

### Payload (Required)
- `password`: Type of string

### Responses
- **onSuccess**: `{ message, status }`
- **onError**: `{ message, status, error }`

- *Status* is either success or error.

- On success, you will be redirected back to a login page.