### Real-Time Chat Application API

This project provides the backend for a real-time chat application. Users can register, log in, and send messages to each other in real time. 
The application uses Socket.io for WebSocket connections to enable real-time communication and JWT for secure authentication.

### Features

- User registration and login with JWT-based authentication.
- Real-time messaging using WebSockets.
- Storage of user data and messages in MongoDB.
- Secure communication with JWT verification.
- Scalable architecture with a clear separation of concerns.

### Technologies Used

  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - Socket.io
  - JWT (JSON Web Token)
  - bcrypt
  - dotenv

### Getting Started

  ### Prerequisites
  - Node.js (v14 or later)
  - MongoDB

### Installation
  1. Clone the repository:

     ```bash 
     git clone https://github.com/Aladaabdul/Chat_App_API.git
     ```
  2. Navigate to the project directory:

     ```bash
     cd chat_app_api
     ```
  3. Install dependencies:

     ```bash
     npm install
     ```
  4. Create a .env file in the root of the project and add the following environment variables:

     ```bash
     PORT=8000
     MONGO_DB_URL=your_mongodb_connection_string
     secretKey=your_jwt_secret

  5. Run the application:

     ```bash
     npm start
     ```
     The server will start on `http://localhost:8000`

### Usage
  ## Register a User
  - URL: http://localhost:8000/api/user/register
  - Method: POST
  - Body:
    {
          "username": "user",
          "email": "user@example.com",
          "password": "password123"
    }

  ## Log In a User
  - URL: http://localhost:8000/api/user/login
  - Method: POST
  - Body:
    {
          "email": "user@example.com",
          "password": "password123"
    }
  - Response:
    {
          "token": "your_jwt_token"
    }

## Messages Endpoints
  ## Send Messages
  - URL: http://localhost:8000/api/chat/send
  - Method: POST
  - Description: Send messages between users. This endpoint is optional. It is for users without a socket.io connection
  - Body:
    {
          "sender": "sender userId",
          "receiver": "receiver userId",
          "content": "message content"
    }

    ## Get User Messages
      - URL: http://localhost:8000/api/chat/messages/userId
      - Method: GET
      - Description: Get a user messages

    ## Get Messages Between Users
      - URL: http://localhost:8000/api/chat/messages/senderId/receiverId
      - Method: GET
      - Description: Get all messages between users

## WebSocket Connection

      URL: http://localhost:8000
      Use the JWT token from the login response to authenticate WebSocket connections. It should be included in the request header as access_token

## WebSocket Event
  Users have to be listening to the "chat message" event to receive message

      - Join a Room
        {
    	      "event": "join",
    	      "data": "userId"
        }

      - Send Chat Messages:
	      {
            "event": "chat message",
            "data": {
                      "sender": "userId",
                      "receiver": "userId",
                      "content": "content"
                    }
        }

        - Receive Chat Messages: 
        {
            "sender": "userId",
            "receiver": "userId",
            "content": "content"
        }

## Contact

For any inquiries, please contact `aladarahman18@gmail.com`
