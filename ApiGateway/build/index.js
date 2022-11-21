"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fast_gateway_1 = __importDefault(require("fast-gateway"));
const server = (0, fast_gateway_1.default)({
    routes: [
        {
            prefix: "/user",
            target: "http://localhost:3001",
        },
        {
            prefix: "/product",
            target: "http://localhost:3002",
        },
        {
            prefix: "/userManagement",
            target: "http://localhost:3003",
        },
    ],
});
server.start(3000).then(() => {
    console.log("Server Up");
});
