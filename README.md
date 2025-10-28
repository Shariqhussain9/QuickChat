
#QuickChat 

QuickChat is a real-time group chat application built with Node.js, Express, React, and Socket.io. It allows multiple users to chat together instantly, see live typing notifications, and get started by simply entering a username. The project demonstrates full-stack, modern web development using hooks, Tailwind CSS, Socket.io-client, Vite, and more.

## Tech Stack

**Client:** React, TailwindCSS, socket.io-client

**Server:** Node, Express, socket.io


Features

Group chat: Any number of users can chat together in real time.

Instant messaging: Messages appear instantly thanks to Socket.io.

Typing indicators: See when others are typing in the chat.

Quick sign-in: Join by entering a username—no password required.

Modern UI: Responsive, stylish interface powered by Tailwind CSS.

Live updates: Built on React functional components using hooks.


How It Works

Users enter a username to sign in.

Real-time group chat: All active users see every message instantly.

Typing status: If a user is typing, others see a "User is typing..." indicator.

Fully functional group messaging, no registration.


Folder Structure

/frontend   # React + Vite client app

/backend    # Node.js + Express + Socket.io server


Usage

Start backend and frontend servers (see Setup above).

Enter a username, join the chat, and start messaging!

See live updates and typing status as other users interact.


## Documentation

[docs for socket.io](https://socket.io/docs/v4/)


## Installation

Frontend (React + Vite):

```bash
    cd frontend 
    npm install 
    npm run dev 
```
Backend (Node.js + Express):

```bash
cd backend 
npm install 
node index.js
```

Make sure to update the frontend Socket.io-client URL if running on a custom backend port.

