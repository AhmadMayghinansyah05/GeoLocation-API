const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const locationRoutes = require("./routes/locationRoutes");
const authRoutes = require("./routes/authRoutes");
const swaggerDoc = YAML.load("./swagger.yaml");

const app = express();
app.use(cors());
app.use(express.json());

// Swagger Docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/locations", locationRoutes);

app.get("/", (req, res) => res.send("GeoLocation API Running"));

module.exports = app;
