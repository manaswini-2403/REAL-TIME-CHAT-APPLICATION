# Real-Time Chat Application

## Project Overview
This project is a **real-time chat application** developed as part of the **CODTECH Internship Task 2**. It allows multiple users to communicate instantly through a responsive web interface, leveraging **WebSockets** for real-time messaging. The application includes features like user authentication, message history, and user presence indicators, fulfilling the requirements of a modern chat platform.

### Features
- **Real-Time Messaging**: Users can send and receive messages instantly using WebSockets (via Socket.IO).
- **Message History**: All messages are stored on the server and displayed to new users upon joining.
- **User Authentication**: Simple username-based login system with persistent usernames using local storage.
- **User Presence**: Displays a list of online users with real-time updates when users join or leave.
- **Responsive UI**: A mobile-friendly interface built with Tailwind CSS, ensuring accessibility across devices.
- **System Notifications**: Alerts for user join/leave events.

### Technologies Used
- **Frontend**:
  - **React.js**: For building a dynamic, component-based user interface.
  - **Tailwind CSS**: For responsive and modern styling.
  - **Socket.IO Client**: For WebSocket-based communication with the backend.
  - **React Router**: For navigation between login and chat pages.
- **Backend**:
  - **Node.js**: Server-side runtime environment.
  - **Express.js**: Web framework for handling HTTP requests.
  - **Socket.IO**: For real-time, bidirectional communication via WebSockets.
  - **CORS**: To enable cross-origin requests.
- **CDNs**: React, React Router, Socket.IO client, and Tailwind CSS are included via CDNs for simplicity.

### Prerequisites
To run the application locally, ensure you have:
- **Node.js** and **npm** installed [](https://nodejs.org/).
- A modern web browser (e.g., Chrome, Firefox).
- Optional: Git for cloning the repository [](https://git-scm.com/).
- Optional: `serve` package for hosting the frontend (`npm install -g serve`).
