# ☕ Coffee Management Server

A **RESTful API server** for the Coffee Management System built with **Node.js, Express, and MongoDB Atlas**. This backend handles all coffee and user data with full CRUD functionality and seamless frontend integration.

---

## 🌐 Live API

* 🔗 **Production API**
  https://coffee-management-server.vercel.app

* 🔗 **Backup Deployment**
  https://coffee-management-server-production-1-mehedipolashs-projects.vercel.app

---

## 🚀 Features

### ☕ Coffee Management

* Full CRUD operations (Create, Read, Update, Delete)
* Store detailed coffee data (name, quantity, supplier, taste, category, description, photo)
* Fetch all products or single product by ID

---

### 👥 User Management

* Store user profile data (name, email, phone, address, photo)
* Track last login time
* Delete users from database

---

### 🗄️ Database

* MongoDB Atlas (cloud database)
* Efficient connection handling
* Structured collections: `coffees`, `users`

---

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas
* **Deployment:** Vercel (Serverless)
* **Security:** CORS, Environment Variables

---

## 📁 Project Structure

```id="y9czk2"
coffee-management-server/
├── index.js
├── vercel.json
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```id="m02s4r"
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
PORT=3000
```

---

## 📚 API Endpoints

### ☕ Coffee Routes

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | `/coffees`     | Get all coffees   |
| GET    | `/coffees/:id` | Get single coffee |
| POST   | `/coffees`     | Add new coffee    |
| PUT    | `/coffees/:id` | Update coffee     |
| DELETE | `/coffees/:id` | Delete coffee     |

---

### 👥 User Routes

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| POST   | `/users`     | Create user       |
| PATCH  | `/users`     | Update last login |
| DELETE | `/users/:id` | Delete user       |

---

### 🩺 Health Check

```id="q5tb5d"
GET /
→ "Coffee management server is running!"
```

---

## 📦 Example Request

### ➕ Add Coffee

```bash id="5kkvwi"
curl -X POST https://coffee-management-server.vercel.app/coffees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Colombian Supremo",
    "quantity": 75,
    "supplier": "Colombian Coffee Federation",
    "taste": "Nutty, Chocolate",
    "category": "Single Origin",
    "details": "Smooth medium roast",
    "photo": "https://example.com/image.jpg"
  }'
```

---

## 🧪 Local Development

```bash id="l1qvfd"
git clone https://github.com/mehedipolash/coffee-management-server.git
cd coffee-management-server
npm install
node index.js
```

Server runs at:

```id="hx2g7r"
http://localhost:3000
```

---

## ☁️ Deployment (Vercel)

### Key Notes:

* No `app.listen()` required
* Export Express app properly
* Use `vercel.json` for routing

```json id="t34r3j"
{
  "version": 2,
  "builds": [{ "src": "index.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "index.js" }]
}
```

---

## 🐛 Common Issues

### ❌ Cannot GET /route

➡️ Route not defined
✔ Fix: Add correct Express route

---

### ❌ CORS Error

➡️ Frontend blocked
✔ Fix:

```js id="pxzq9o"
app.use(cors());
```

---

### ❌ MongoDB Connection Error

➡️ Wrong credentials or IP
✔ Fix:

* Check `.env`
* Allow `0.0.0.0/0` in Atlas

---

### ❌ Invalid ObjectId

✔ Fix:

```js id="6j6k7f"
if (!ObjectId.isValid(id)) {
  return res.status(400).json({ error: "Invalid ID" });
}
```

---

## 🔒 Security Notes

* Use environment variables for secrets
* Enable CORS properly
* Add validation (recommended for production)
* Consider JWT authentication

---

## 📈 Future Improvements

* JWT Authentication 🔐
* Request validation (Joi/Zod)
* Pagination & filtering
* Rate limiting
* API documentation (Swagger)
* Logging system

---

## 👨‍💻 Author

**Mehedi Polash**
🔗 https://github.com/mehedipolash

---

## 🔗 Related Projects

* Frontend: https://coffee-store-app-77cb4.web.app
* Backend: https://coffee-management-server.vercel.app

---

## 📄 License

MIT License

---

> Built with Node.js, Express, and MongoDB • Deployed on Vercel
