# 🌐 Node.js – Day 3 Backend Development Notes

Welcome to **Day 3 of Backend Development**!  
Today, we explored **REST APIs**, how they work, the different HTTP methods, and the main ways to send data from the client to the server in Express.js.  

---

## 🌐 1. What are REST APIs?

- **REST (Representational State Transfer)** is a **type of API** that follows **specific rules and guidelines** for communication.  
- It works over the **HTTP protocol** and defines a set of constraints for designing web services.  
- REST APIs use standard **HTTP methods** like:  
  - `GET` – Read data  
  - `POST` – Create new data  
  - `PUT` / `PATCH` – Update existing data  
  - `DELETE` – Remove data  
- They also define **standard structures** for requests and responses, making them predictable and easy to use.  

---

## 📨 2. Ways to Send Data in Requests

### 🔹 a) `req.body`  
- Data is sent in the **request payload** (not visible in the URL).  
- Best for **large**, **sensitive**, or **complex** data (e.g., passwords, form submissions).  
- Common in `POST`, `PUT`, and `PATCH` requests.  

---

### 🔹 b) `req.query`  
- Data is sent in the **URL** after `?` as **key-value pairs**.  
- Useful for **small**, **optional** parameters like filters or pagination.  
- Avoid sending sensitive data here (as it’s visible in the URL).  
- Example:  
  ```
  GET /search?gender=male&age=24
  ```  

---

### 🔹 c) `req.params`  
- Data is sent as **part of the URL path**.  
- Often used for identifying a **specific resource**.  
- Example:  
  ```
  GET /user/ankur_bit_io
  ```  
- Access in code:  
  ```js
  req.params.username
  ```  

---

## 🧾 3. REST API Methods Table

| Method   | Purpose                                      |
|----------|----------------------------------------------|
| **GET**     | Retrieve data from the server.               |
| **POST**    | Send new data to the server (create).        |
| **PATCH**   | Update part of an existing resource.         |
| **PUT**     | Replace an existing resource completely.     |
| **DELETE**  | Remove/delete data from the server.          |

---

💡 **Example Use Case**:  
In a social media app like **x.com**:  
- `req.params` → Fetch a specific user profile (`/user/:username`)  
- `req.query` → Filter search results (`/search?gender=male`)  
- `req.body` → Submit login forms or create new posts  

---

🎯 With REST APIs and HTTP methods, we now have the foundation to design **structured and scalable** backend services!
