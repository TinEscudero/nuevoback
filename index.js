const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connect } = require("./api/utils/database");

const PORT = process.env.PORT
const server = express();
connect();

const routerTask = require("./api/./routers/task.router")



server.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4200", "http://nombre.vercel.com", "http://127.0.0.1:5500"],
    credentials: true
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rutas

server.use("/task", routerTask);
server.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenidos a EscapeUp" });
});

server.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));