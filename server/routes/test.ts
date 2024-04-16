import express, { Express } from "express";
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("poopoo").status(204)
})

export default router;