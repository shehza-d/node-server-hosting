import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

//middleware configuration
app.use(
  cors({
    origin: ["http://localhost:3000", "https://localhost:3003", "*"],
  })
);

app.get("/", (req, res) => {
  console.log("🚀 ~ server.mjs:7 ~ app.get ~ req:", req);
  res.send({ message: "♥️ Hello World! by Shehzad ❤️ with CI/CD action" });
});

app.get("/name/:myName", (req, res) => {
  const name = req.params.myName;

  console.log("🚀 ~ server.mjs:14 ~ app.get ~ name:", name);

  res.send({ message: `Hello World! by ${name} 👋🏻` });
});

app.get("/first", (req, res) => {
  res.send("This is my first Express server !!😁");
});

app.get("/waiting", (req, res) => {
  setTimeout(
    () => res.send("⏰ Shehzad Responding late after 6s from HTTP Server ⏰"),
    6000
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
