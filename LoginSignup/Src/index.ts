import express, { Application } from "express";

const app: Application = express();
const PORT: number = 3001;

app.get("/login", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User login successfully",
    data: { token: "rtyujnmkfodijewdk6789ijerfdnfsdis" },
  });
});

app.get("/signup", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User signup successfully",
    data: { user: { userName: "Rocky", email: "rocky@gmail.com" } },
  });
});

app.listen(PORT, () =>
  console.log(`LoginSignUp Service Listen On PORT ${PORT}`)
);
