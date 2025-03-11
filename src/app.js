require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const itemRoutes = require("./routes/item.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static frontend files

// Use item routes
app.use("/api/items", itemRoutes);

// Sync DB and start the server
db.sequelize.sync().then(() => {
    console.log("✅ Database synced");
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
});
