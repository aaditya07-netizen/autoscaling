import express from "express";
const app = express();
const PORT = 3000;
// Middleware
app.use(express.json());
// Simple route
app.get("/", (req, res) => {
    res.send("Hello World 🚀");
});
// Another route
app.get("/about", (req, res) => {
    res.json({
        message: "This is a basic Express server"
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
