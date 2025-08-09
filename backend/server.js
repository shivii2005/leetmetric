import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/leetcode", async (req, res) => {
    try {
        const response = await fetch("https://leetcode.com/graphql/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

const PORT = 5000; // different port to avoid conflicts
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));