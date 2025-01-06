require('dotenv').config();
const express = require('express');
const router = require('./auth-router/auth-router');
const connectdb = require('./database/db');
const app = express();
const adminrouter = require('./admin/adminroute');  


const PORT = process.env.SERVER_PORT;


app.use(express.json());
app.use("/api", router);
app.use("/admin",adminrouter);

connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);
    })
})
