"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3003;
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
app.listen(PORT, () => console.log(`User Management Service Listen On PORT ${PORT}`));
