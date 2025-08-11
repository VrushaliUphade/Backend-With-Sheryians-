# 🗓️ Node.js – Day 4 Backend Development Notes

Today, we built a Mini Notes API to understand the fundamentals of REST APIs using Express.js.
This project helped us practice creating, reading, updating, and deleting data — the core CRUD operations — all within a simple backend server.

---

## 🚀 1. What is Express.js?

**Express.js** is a minimal and flexible Node.js web application framework.

It provides a set of features for building APIs and web applications quickly and easily.

Simplifies tasks like:
- Routing
- Handling requests & responses
- Middleware usage

🔗 Official site: [https://expressjs.com/](https://expressjs.com/)

---

## 📦 2. Installing Express.js

Before using Express, install it via npm:

```bash
npm install express
```

---

## 🏗️ 3. Project Overview – Notes API

We created a very simple API that can:
- ✅ Create a note
- 📄 Show all notes
- ❌ Delete a note by index
- ✏️ Update a note’s title

This project stores data in an array (in-memory), not a database — perfect for learning concepts before scaling.

---

## 🔧 4. Project Code

```js
const express = require('express');
const app = express();

app.use(express.json());

let notes = [];

// Root route
app.get('/', (req, res) => {
    res.send('Hello, Cohort!');
});

// Create a new note
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.json({ message: "note created successfully" });
});

// Show all notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// Delete a note
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.json({ message: "note deleted successfully" });
});

// Update a note’s title
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const { title } = req.body;
    notes[index].title = title;
    res.json({ message: "note updated successfully" });
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

---

## 📚 5. Routes Summary

| Method | Route           | Purpose                  |
|--------|----------------|--------------------------|
| GET    | `/`             | Welcome message          |
| POST   | `/notes`        | Add a new note           |
| GET    | `/notes`        | List all notes           |
| DELETE | `/notes/:index` | Delete a note by index   |
| PATCH  | `/notes/:index` | Update title of a note   |

---

## 🧪 6. Testing the API

We can test our API using tools like:
- **Postman** – Advanced API testing tool
- **Thunder Client** – Lightweight VS Code extension

---

🎉 **Day 4 Completed!**
We now know how to set up an Express.js server, define multiple routes, and perform CRUD operations using REST principles.
This foundation is essential for building larger backend projects with databases.
