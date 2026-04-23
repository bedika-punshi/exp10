# 💬 Real-Time Chat Application (WhatsApp-like)

A real-time chat application built using **Spring Boot (WebSocket + STOMP)** and **React (Vite)**.
This project demonstrates how to create a live messaging system where users can send and receive messages instantly without refreshing the page.

---

## 🚀 Features

* 🔄 Real-time messaging using WebSockets
* 👥 Broadcast messages to all connected users
* ⚡ Instant updates (no page refresh)
* 🎨 WhatsApp-like UI structure
* 🔌 STOMP protocol for message handling
* 🌐 Cross-origin support for frontend integration

---

## 🛠️ Tech Stack

### Backend

* Java (Spring Boot)
* WebSocket (STOMP)
* Maven

### Frontend

* React (Vite)
* CSS (custom WhatsApp-like styling)

---

## 📁 Project Structure

### Backend (Spring Boot)

```
src/main/java/com/AML3B/Demo_WebSocket
│
├── config
│   └── WebSocketConfig.java
│
├── controller
│   └── ChatController.java
│
├── model
│   └── Message.java
```

### Frontend (React)

```
src/
├── components
│   └── ChatApp.jsx
├── styles
│   └── ChatApp.css
```

---

## ⚙️ How It Works

### 🔁 Message Flow

1. Client sends message to:

```
/app/chat
```

2. Spring Boot handles it in:

```
@MessageMapping("/chat")
```

3. Server broadcasts message to:

```
/topic/messages
```

4. All connected clients receive it instantly 🎉

---

## 🔌 WebSocket Configuration

* Endpoint: `/ws`
* Application Prefix: `/app`
* Broker: `/topic`

---

## ▶️ Run the Project

### 🔹 Backend (Spring Boot)

1. Navigate to project folder
2. Run:

```bash
mvn spring-boot:run
```

Server runs on:

```
http://localhost:8080
```

---

### 🔹 Frontend (React - Vite)

1. Navigate to frontend folder
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔗 WebSocket Endpoints

| Purpose      | Endpoint          |
| ------------ | ----------------- |
| Connect      | `/ws`             |
| Send Message | `/app/chat`       |
| Receive      | `/topic/messages` |

---

## 📸 UI Preview

* Sidebar (Chats)
* Chat Header
* Message Area
* Input + Send Button

---

## ⚠️ Notes

* Ensure `spring-boot-starter-websocket` dependency is added
* Enable CORS using:

```java
.setAllowedOriginPatterns("*")
```

* Do not use default package in Java

---

## 🔮 Future Improvements

* 👤 User authentication (JWT)
* 🟢 Online/offline status
* 📩 Private messaging
* 📱 Mobile responsiveness
* 🗂 Chat history (database)

---

## 🤝 Contributing

Feel free to fork the project and improve it!

<img width="1503" height="901" alt="Screenshot 2026-04-23 at 2 21 12 PM" src="https://github.com/user-attachments/assets/2af56bf8-1a0c-4903-9093-df94d1143c24" />
<img width="1510" height="900" alt="Screenshot 2026-04-23 at 2 20 56 PM" src="https://github.com/user-attachments/assets/ed098b76-0323-46e7-977d-d8c62e7cb184" />
<img width="1512" height="982" alt="Screenshot 2026-04-23 at 1 32 29 PM" src="https://github.com/user-attachments/assets/b04d07e1-2fab-4ca6-94ee-8e8bfc51a85a" />


