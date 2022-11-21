import express, { Application } from "express";

const app: Application = express();
const PORT: number = 3002;

app.get("/category", (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "Product category list",
    data: {
      categoryList: [
        { id: 1, name: "Shoes" },
        { id: 2, name: "Shirt" },
      ],
    },
  });
});

app.listen(PORT, () =>
  console.log(`Product Management Service Listen On PORT ${PORT}`)
);
