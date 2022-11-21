import express, { json, Request, Response } from "express";

const app = express();
app.use(json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(5000);
