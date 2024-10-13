"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    reset_pass_ui_link: process.env.RESET_PASS_UI_LINK,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    payment_success_url: process.env.PAYMENT_SUCCESS_URL,
    payment_cancel_url: process.env.PAYMENT_CANCEL_URL,
};
