require("dotenv").config();

const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());


const dataRoute = require("./routes/data.routes");

app.use("/api/user", dataRoute);


const port = process.env.PORT;


app.listen(port, () => console.log(`Backend is running on ${port}`)) 