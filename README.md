# 🚀 Full-Stack Crypto Tracker (MERN Stack)

This is a full-stack cryptocurrency tracking application built as part of the VR Automations technical assignment. It fetches live crypto data from the CoinGecko API, displays it in a React dashboard, stores both current and historical data in MongoDB, and uses a cron job to sync data hourly.

---

## 🧑‍💻 Tech Stack Used

### Frontend
- React.js
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- node-cron
- dotenv

---

## ⚙️ Setup Instructions

### 📁 Clone the Backend Repo
```bash
https://github.com/kudrat07/crypto_tracker_backend.git
```

### 🖥 Backend Setup
```bash
npm install
```

Create a `.env` file in `/server`:
```env
MONGO_URI=mongodb+srv://kudrathussain809:kudrat786@cryptocluster.lk9a8sh.mongodb.net/?retryWrites=true&w=majority&appName=cryptoCluster
```

Start the backend:
```bash
npm start 
or
npm run dev
```

### 🌐 Frontend Setup

### 📁 Clone the Frontend Repo

```bash
https://github.com/kudrat07/crypto_tracker_frontend.git
npm install
```


Start the React app:
```bash
npm start
```

---

## ⏱ How the Cron Job Works

- The cron job is defined in `server/cron/fetchHistory.js`
- It runs **every 1 hour** (`0 * * * *`) using `node-cron`
- The job fetches the top 10 crypto coins from CoinGecko
- It then stores a snapshot of their price, market cap, etc. into the `History` collection in MongoDB

To run it manually:
```bash
node cron/fetchHistory.js
```

---

## 🌍 Deployment Links

- 🔗 **Live Frontend (Vercel):** https://crypto-tracker-frontend-seven.vercel.app/
- 🔗 **Live Backend API (Render):** https://crypto-tracker-backend-2n2c.onrender.com/api/coins

---

## 🗃️ Screenshot of Database (MongoDB Atlas)

![Database Screenshot](./screenshots/db_screenshot_1.png)
![Database Screenshot](./screenshots/db_screenshot_2.png)
![Database Screenshot](./screenshots/db_screenshot_3.png.png)


## ⏲️ Screenshot of Cron Job Setup

![Database Screenshot](./screenshots/cron_job.png)



## 📌 Notes

- Auto-refresh is enabled every 30 minutes on the dashboard
- Uses CoinGecko's free public API for real-time data

---

> 👨‍💻 Built with ❤️ for VR Automations
