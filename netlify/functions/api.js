// YOUR_BASE_DIRECTORY/netlify/functions/api.ts

import express, { Router } from "express";
const app = express();
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/", (req, res) => {
    const mentor = 5000;
    const favClass = 120;
    const trusted = 100;

    res.status(200).json({
        mentor,
        favClass,
        trusted
    });
});

app.use("/.netlify/function/api/", router);

export const handler = serverless(app);
