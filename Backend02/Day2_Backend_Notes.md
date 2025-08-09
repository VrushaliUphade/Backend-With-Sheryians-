
# 🌐 Node.js – Day 2 Backend Development Notes

Welcome to **Day 2 of Backend Development**!  
Today, we moved beyond the built-in `http` module and explored **Express.js** — a powerful and minimal Node.js framework for creating servers and building APIs. 🚀

---

## ❌ 1. Why We Don’t Use the HTTP Module Directly
- **Verbose & repetitive**: Requires more boilerplate code for basic tasks.
- **No built-in routing or middleware**: Every route must be handled manually.
- **Hard to scale**: Managing large applications becomes complex.
- **Less developer-friendly**: Common tasks like parsing JSON or serving static files require extra code.

---

## 🚀 2. Introduction to Express.js
- **Express** is a **minimal, fast, and flexible Node.js framework**.
- Makes it easier to:
  - Create web servers.
  - Handle routing.
  - Use middleware for additional functionality.
- Popular for building **REST APIs** and full-stack applications.

---

## 🛠️ 3. Installing Express
Install via npm:
```bash
npm install express
```

---

## 📡 4. Creating an Express App
```js
const express = require('express');
const app = express();
```

> `express()` returns an application instance that we can use to define routes, middleware, and start the server.

---

## ▶️ 5. Starting the Express Server
```js
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
```

---

## ❗ 6. First Request Test
- Visit:
```
http://localhost:3000/
```
- Without any routes, Express responds with:
```
Cannot GET /
```

---

## 🧠 7. Understanding APIs in Express
Define a route like this:
```js
app.get(path, callback);
```
- **path**: The URL endpoint (e.g., `/`, `/about`, `/users`)
- **callback**: Function that runs when a request matches the path.

---

## 📍 8. Creating Your First `/` API
```js
app.get('/', (req, res) => {
    res.send('Hello World 🌍');
});
```
✅ Now visiting `http://localhost:3000/` will display **Hello World**.

---

## 📥 9. The `req` (Request) Object
Contains **data sent by the client**:
- `req.url` → Requested path.
- `req.headers` → Client headers.
- `req.query` → Query parameters.
- `req.body` → Data sent in POST requests.

---

## 📤 10. The `res` (Response) Object
Used to **send data back to the client**:
- `res.send()` → Sends text/HTML.
- `res.json()` → Sends JSON data.
- `res.status()` → Sets HTTP status code.

Example:
```js
app.get('/user', (req, res) => {
    res.status(200).json({ name: "John Doe", role: "Admin" });
});
```

---

## 🔗 11. What is an API?
- **API (Application Programming Interface)**: A method for **two applications to communicate**.
- Enables one app to request data or services from another.
- Flexible — can return **JSON**, HTML, XML, etc.

---

## 🌐 12. What are REST APIs?
- **REST** = **Representational State Transfer** — an architectural style for building APIs.
- Uses HTTP methods:
  - `GET` → Retrieve data.
  - `POST` → Send data.
  - `PUT` → Update data.
  - `DELETE` → Remove data.
- Encourages **stateless, standardized communication**.

---

🎯 **End of Day 2**

