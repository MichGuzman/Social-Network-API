# 17 NoSQL: Social Network API

## Social Network API

An API for a social networking application where users can share their thoughts, react to friends’ thoughts, and manage a friend list.

Built with:

- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- TypeScript

## Project Structure

```md
📦 src/
┣ 📁 config/ # MongoDB connection
┣ 📁 controllers/ # Logic for users, thoughts, and reactions
┣ 📁 models/ # Mongoose models (User, Thought, Reaction)
┣ 📁 routes/ # API route handlers
┣ 📄 server.mts # Main server (Node + ESM + TypeScript)
```

## Install Dependencies and Start MongoDB

```md
npm install

npm run dev

Base URL http://localhost:3001
```

## API Testing
```md
| Method | Endpoint                               | Description                         |
| ------ | -------------------------------------- | ----------------------------------- |
| GET    | `/api/users`                           | Get all users                       |
| GET    | `/api/users/:userId`                   | Get a user by ID                    |
| POST   | `/api/users`                           | Create a new user                   |
| PUT    | `/api/users/:userId`                   | Update a user                       |
| DELETE | `/api/users/:userId`                   | Delete user and associated thoughts |
| POST   | `/api/users/:userId/friends/:friendId` | Add a friend                        |
| DELETE | `/api/users/:userId/friends/:friendId` | Remove a friend                     |

```


## Video
📽️ [https://drive.google.com/file/d/1UA8mbDV1EWHEGOEKMpV12Gpbau7Myroo/view?usp=sharing]


### Author
Michelle Guzmán






---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
