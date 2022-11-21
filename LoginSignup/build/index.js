"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3001;
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
app.listen(PORT, () => console.log(`LoginSignUp Service Listen On PORT ${PORT}`));
