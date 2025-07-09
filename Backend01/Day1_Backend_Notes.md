# 🌐 Node.js – Day 1 Backend Development Notes

Welcome to **Day 1 of Backend Development**!  
In this session, we explored the core concepts of **Node.js**, including what it is, why it was created, how to install it, and how to run JavaScript files using Node. We also learned how to use packages, the difference between packages and modules, and how to create a simple server using Node's built-in `http` module.

---

## 🧠 1. What is Node.js?

- **Node.js** is a **JavaScript runtime environment** that allows developers to run JavaScript code **outside the web browser** (for example, on a server).
- It is **built on Chrome’s V8 JavaScript engine**, which makes it fast and efficient.
- Node.js enables developers to build **scalable and high-performance** network applications.
- It is designed with a **non-blocking, event-driven architecture**, which makes it ideal for real-time applications such as chat apps, online gaming, and APIs.

---

## 👤 2. Who Created Node.js and Why?

- **Created by**: Ryan Dahl  
- **Released in**: 2009 (initial development began in 2007)

### 🎯 Why was Node.js created?

- At the time, traditional web servers (like Apache) used a **multi-threaded, blocking I/O model**, which was inefficient at handling large numbers of simultaneous connections.
- Node.js was introduced to solve this problem by using an **event-driven, non-blocking I/O model**, which allows it to handle many connections efficiently.
- It was specifically designed to build **real-time, high-concurrency, and scalable applications**.

---

## 💾 3. Installing Node.js

You can download Node.js from the official website:

🔗 [https://nodejs.org](https://nodejs.org)

You’ll see two versions available:
- **LTS (Long Term Support)** – More stable and reliable, ideal for production use.
- **Current** – Has the latest features but may be unstable.

### ✅ After installation, check your versions:
```bash
node -v
npm -v
```
This confirms Node.js and npm (Node Package Manager) are installed correctly.

---

## 🚀 4. Running JavaScript Files with Node

Once installed, you can run any `.js` file using the terminal:

```bash
node filename.js
```

For example:
```bash
node app.js
```

Node.js provides its own runtime environment with built-in APIs such as:
- `fs` – Interact with the file system
- `http` – Create web servers
- `path` – Work with file and directory paths

These can be imported using the `require()` function.

---

## 📦 5. Packages in Node.js

- **Packages** are reusable pieces of code (libraries/tools) that help you build applications faster.
- Node.js uses **npm (Node Package Manager)** to install and manage packages.
- You can install any available package from the npm registry.

### 📌 Example:
```bash
npm install cat-me
```

This installs the `cat-me` package which generates ASCII cat art.

---

## 📚 6. Packages vs Modules

| Feature     | Package                           | Module                        |
|-------------|-----------------------------------|-------------------------------|
| Definition  | Third-party libraries/tools       | Built-in functionality        |
| Source      | Installed using `npm`             | Comes with Node.js            |
| Examples    | `express`, `cat-me`, `chalk`      | `http`, `fs`, `path`, `url`   |

---

## 🐱 7. Installing and Using a Package (e.g., cat-me)

### Step 1: Install the package
```bash
npm install cat-me
```

### Step 2: Use it in your JavaScript file
```js
const catMe = require("cat-me");

console.log(catMe());
```

When you run this code, it will print a random ASCII cat in your terminal!

---

## 🌐 8. HTTP Module in Node.js

- The `http` module is a **built-in module** in Node.js that allows developers to create web servers and handle HTTP requests and responses.
- This module does **not require installation**, as it's already included in Node.js.

---

## 🔧 9. Creating a Simple Server with HTTP Module

Here’s how you can create a basic web server using Node.js:

```js
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    res.end("Hello from Node.js server!");
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

### ▶️ Run the server:
```bash
node server.js
```

### 🌐 Visit in your browser:
```
http://localhost:3000
```

You will see the message:
```
Hello from Node.js server!
```

---

🎉 Great job completing Day 1 of Node.js backend development! Now you're ready to dive deeper into server-side programming and begin building real-world backend projects.