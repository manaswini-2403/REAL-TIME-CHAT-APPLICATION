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
- **Node.js** and **npm** installed ([nodejs.org](https://nodejs.org/)).
- A modern web browser (e.g., Chrome, Firefox).
- Optional: Git for cloning the repository ([git-scm.com](https://git-scm.com/)).
- Optional: `serve` package for hosting the frontend (`npm install -g serve`).

### Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/realtime-chat-app.git
   cd realtime-chat-app
   ```
2. **Install Backend Dependencies**:
   ```bash
   npm install
   ```
   This installs `express`, `socket.io`, and `cors` as specified in `package.json`.

3. **Start the Backend Server**:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:5000`. Keep this terminal running.

4. **Serve the Frontend**:
   In a new terminal, navigate to the project directory and run:
   ```bash
   npm install -g serve
   serve -s .
   ```
   The frontend will be hosted at `http://localhost:3000` (port may vary; check terminal output).

### Usage
1. **Access the Application**:
   - Open `http://localhost:3000` in a web browser.
2. **Login**:
   - Enter a unique username (e.g., "Alice") and click "Join Chat."
3. **Chat**:
   - Send messages in the chat interface; they will appear in real-time for all connected users.
   - View the online users list in the sidebar.
   - See message history from previous interactions.
4. **Test Multi-User Communication**:
   - Open multiple browser tabs (or different browsers/devices) and log in with different usernames (e.g., "Alice" and "Bob").
   - Send messages from one tab and verify they appear in others.
   - Close a tab to trigger a "user left" notification.

### Project Structure
```
realtime-chat-app/
├── index.html        # Frontend: React app with Tailwind CSS
├── server.js         # Backend: Node.js with Express and Socket.IO
├── package.json      # Backend dependencies
```

### Screenshots


### Troubleshooting
- **Backend Issues**:
  - Ensure `node server.js` runs without errors and shows "Server running on port 5000."
  - If port 5000 is in use, update `server.js` and `index.html` to use a different port (e.g., 5001).
- **Frontend Issues**:
  - Use `serve` to host `index.html` (avoid opening as `file://` to prevent CORS errors).
  - Check browser console (F12 > Console) for Socket.IO connection errors.
- **Multi-User Communication**:
  - Test with multiple browser tabs or incognito mode to avoid session conflicts.
  - Verify server logs for user connections and messages.

### Submission Details
This project fulfills **CODTECH Internship Task 2** requirements:
- Built with **React.js** and **Socket.IO** (WebSockets).
- Features a responsive chat interface with message history.
- Supports multi-user real-time communication.
- Submitted files: `index.html`, `server.js`, `package.json`.

### Future Enhancements
- Add persistent message storage (e.g., MongoDB).
- Implement private messaging or chat rooms.
- Enhance security with JWT-based authentication.
- Add file sharing or emoji support.

### License
This project is licensed under the MIT License.
