import express, { Application } from "express";

const app: Application = express();
const PORT: number = 3003;

app.get("/userDetails", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User information",
    data: {
      userInfo: {
        userName: "Rocky",
      },
    },
  });
});

app.listen(PORT, () =>
  console.log(`User Management Service Listen On PORT ${PORT}`)
);
