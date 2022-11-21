"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3002;
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
app.listen(PORT, () => console.log(`Product Management Service Listen On PORT ${PORT}`));
